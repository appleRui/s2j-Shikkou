<style lang="scss" scoped>
.articles {
  padding: 1.75rem 0;
}
</style>

<template>
  <b-container>
    <div class="page-content">
      <div class="ttl-content text-left">
        <h1 class="ttl">お知らせ一覧</h1>
      </div>
      <div class="articles">
        <div class="articles-wrapper">
          <NewsList
            :articles="articles"
            :perPage="perPage"
            :currentPage="currentPage"
          />
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="news-lists"
            align="center"
          ></b-pagination>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  async asyncData({ $notionClient, $config }) {
    const url = `/v1/databases/${$config.NOTION_DB}/query`;
    const current_day = new Date();
    const current_day_format =
      current_day.getFullYear() +
      "-" +
      (current_day.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      current_day.getDate().toString().padStart(2, "0");
    const option = {
      filter: {
        and: [
          {
            property: "公開",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "公開日",
            date: {
              on_or_before: current_day_format,
            },
          },
        ],
      },
    };
    const articles = await $notionClient.post(url, JSON.stringify(option), {});
    return {
      articles: articles.data.results,
    };
  },
  computed: {
    rows({ articles }) {
      return articles.length;
    },
  },
};
</script>