<template>
  <section class="news">
    <b-container class="news-container">
      <div class="news-wrapper">
        <div class="ttl-content">
          <h2 class="ttl">お知らせ</h2>
          <p class="txt">- News -</p>
        </div>
        <ul class="news-lists">
          <li
            class="news-list"
            v-for="article in articles"
            :key="article['id']"
          >
            <a class="news-list__link" :href="article['url']"
              ><time class="news-list__times">{{
                article.properties["公開日"].date.start
              }}</time
              ><span class="news-list__tag">{{
                article.properties["タグ"].select.name
              }}</span>
              <p class="d-inline news-list__txt">
                {{
                  article.properties["タイトル"].title[0].text.content
                    | omittedText
                }}
              </p></a
            >
          </li>
        </ul>
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
    .news-lists {
      list-style-type: none;

      .news-list {
        border-bottom: 1px solid #c0c0c0;

        &:first-child {
          border-top: 1px solid #c0c0c0;
        }
        &__link {
          padding: 1rem 0.5rem;
          color: black;
          text-decoration: none;
          display: inline-block;
          width: 100%;

          &:hover {
            background-color: rgba(193, 193, 193, 0.2);
            border-radius: 0.3rem;
          }
        }
        &__times {
          margin: 0 1.5rem;
          width: 19%;
        }
        &__tag {
          text-align: center;
          display: inline-block;
          margin: 0 1.5rem;
          padding: 0.15rem 0.5rem;
          color: #ffffff;
          background-color: red;
          border-radius: 0.3rem;
          font-size: 14px;
          font-weight: bold;
          width: 8%;
        }
        &-txt {
          width: 73%;
        }
      }
    }
  }
}
</style>
