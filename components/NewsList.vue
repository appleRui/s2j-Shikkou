<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "./NewsList";
</style>

<template>
  <ul id="news-lists">
    <li class="news-list" v-for="article in articles" :key="article['id']">
      <nuxt-link
        class="news-list__link"
        :to="{ name: 'news-id', params: { id: article['id'] } }"
      >
        <time class="news-list__times">{{
          article.properties["公開日"].date.start
        }}</time
        ><span
          class="news-list__tag"
          v-if="article.properties['タグ'].select"
          >{{ article.properties["タグ"].select.name }}</span
        >
        <p class="d-inline news-list__txt">
          {{
            article.properties["タイトル"].title[0].text.content | omittedText
          }}
        </p></nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    sliceData({ articles }) {
      return articles.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  filters: {
    omittedText(text) {
      return text.length > 24 ? text.slice(0, 24) + "…" : text;
    },
  },
};
</script>
