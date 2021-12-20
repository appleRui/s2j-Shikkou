<template>
  <section class="news">
    <b-container class="news-container">
      <div class="ttl-content">
        <h2 class="ttl">お知らせ</h2>
        <p class="txt">News</p>
      </div>
      <div class="news-wrapper">
        <NewsList :articles="articles"/>
        <div class="news-wrapper__btn-list">
          <b-button
            class="news__next-btn"
            squared
            variant="outline-secondary"
            to="/articles"
            >一覧へ</b-button
          >
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
    },
  },
  filters: {
    omittedText(text) {
      return text.length > 24 ? text.slice(0, 24) + "…" : text;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.news {
  padding: 4rem 0;

  &-wrapper {
    &__btn-list {
      text-align: right;
      .news__next-btn{
        &::after{
          margin-left: 0.25rem;
          content: ">>";
        }
      }
    }
  }
}
</style>
