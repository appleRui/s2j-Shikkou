<template>
  <div id="page-top">
    <MainVisual />
    <News />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url = `/v1/databases/1ef8b25e8d39407eaaf1bf2f331c7f31/query`;
    await $axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: "Bearer " + process.env.NOTION_TOKEN,
            "Notion-Version": "2021-08-16",
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => {
        return { articles: data["data"] };
      });
  },
  mounted() {
    console.log(this.articles);
  },
};
</script>
