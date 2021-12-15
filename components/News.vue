<template>
  <div class="news">
    <b-container class="news-container" style="max-width: 720px">
      <div class="news-wrapper">
        <div class="news-wrapper__ttl-area">
          <h2 class="news-wrapper-ttl">お知らせ</h2>
          <p class="news-wrapper-txt">- News -</p>
        </div>
        <ul class="news-wrapper__lists">
          <li v-for="article in articles" :key="article['id']">
            <a :href="article['url']"
              ><time>{{ article.properties["公開日"].date.start }}</time
              ><span class="news-wrapper__lists-tag">{{
                article.properties["タグ"].select.name
              }}</span>
              <p class="d-inline news-wrapper__lists-txt">
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
  </div>
</template>

<script>
export default {
  props: ["articles"],
  filters: {
    omittedText(text) {
      return text.length > 24 ? text.slice(0, 24) + "…" : text;
    },
  },
};
</script>
