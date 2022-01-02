<template>
  <div id="page-top">
    <MainVisual />
    <News :articles="articles" />
    <Works />
    <Faq />
  </div>
</template>

<script>
export default {
  data() {},
  async asyncData({ $axios }) {
    const url = `/v1/databases/${process.env.NOTION_DB}/query`;
    const current_day = new Date();
    const current_day_format = current_day.getFullYear() + "-" +  (current_day.getMonth() + 1).toString().padStart(2,"0") + "-" + current_day.getDate().toString().padStart(2,"0")
    const option = {
      filter: {
        "and": [
          {
            "property": "公開",
            "checkbox": {
              "equals": true,
            },
          },
          {
            "property": "公開日",
            "date": {
              "on_or_before": current_day_format,
            },
          },
        ],
      },
      page_size: 5,
    };
    const articles = await $axios.post(
      url,
      JSON.stringify(option),
      {
        headers: {
          Authorization: "Bearer " + process.env.NOTION_TOKEN,
          "Notion-Version": "2021-08-16",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      articles: articles.data.results,
    };
  },
  methods: {},
};
</script>
