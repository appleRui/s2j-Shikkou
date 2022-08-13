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
import { notionRequestUrl, getAllNewsOptions } from '@/utils/notionRequestUtils';

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
    };
  },
  async asyncData ({ $notionClient }) {
    try {
      const { data } = await $notionClient.post(notionRequestUrl.getAllNews, getAllNewsOptions());
      return {
        articles: data.results
      };
    } catch (e) {
      console.error('Error', e);
    }
  },
  computed: {
    rows({ articles }) {
      return articles.length;
    }
  }
};
</script>