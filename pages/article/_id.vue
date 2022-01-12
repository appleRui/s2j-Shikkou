<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script>
export default {
  data: () => ({ blockMap: null }),
  async asyncData({ $notion, params, redirect }) {
    try {
      const blockMap = await $notion.getPageBlocks(params.id);
      console.log(blockMap);
      return { blockMap };
    } catch (e) {
      redirect(500, "/error");
    }
  },
};
</script>

<style>
@import "vue-notion/src/styles.css";
.notion-gray_background_co {
  background-color: rgb(235, 236, 237, 1);
}
</style>