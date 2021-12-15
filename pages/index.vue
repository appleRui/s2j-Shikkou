<template>
  <div id="page-top">
    <MainVisual />
    <News :articles="articles" />
    <Works />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url = `/v1/databases/${process.env.NOTION_DB}/query`;
    const current_day = new Date();
    const current_day_format = `${current_day.getFullYear()}-${
      current_day.getMonth() + 1
    }-${current_day.getDate()}`;
    const articles = await $axios.post(
      url,
      {
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
      },
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
};
</script>
