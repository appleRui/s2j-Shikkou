<style>
@import "vue-notion/src/styles.css";
.notion-page{
  margin-top: 96px;
}
.notion-gray_background_co {
  background-color: rgb(235, 236, 237, 1);
}
</style>

<template>
  <div id="article-inner">
    <NotionRenderer :blockMap="blockMap" fullPage />
  </div>
</template>

<script>
export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion, params, redirect }) {
    try {
      const blockMap = await $notion.getPageBlocks(params.id);
      return { blockMap };
    } catch (e) {
      redirect(500, "/error");
    }
  },
};
</script>
