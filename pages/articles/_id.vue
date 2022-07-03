<style lang="scss">
@import "vue-notion/src/styles.css";
.notion-page {
  margin-top: 96px;
}
.notion-gray_background_co {
  background-color: rgb(235, 236, 237, 1);
}
.notfound {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 90vh;
    .txt {
      font-size: 1.5rem;
    }
  }
}
</style>

<template>
  <div id="article-inner">
    <NotionRenderer :blockMap="blockMap" fullPage />
    <div v-if="isBlockMap" class="notfound">
      <div class="notfound__inner">
        <h1 class="txt">ページが公開されておりません</h1>
        <NuxtLink
          v-if="this.$route.path !== '/'"
          class="btn btn-primary btn-sm mt-3"
          to="/"
          >トップページへ</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      blockMap: null ,
      isBlockMap: false
    }
  },
  async created() {
    try {
      const blockMap = await this.$notion.getPageBlocks(this.$route.params.id)
      if(!!Object.keys(blockMap).length){
        this.blockMap = blockMap
      }else{
        this.isBlockMap = true
      }
    } catch (e) {
      this.isBlockMap = true
      console.error(e)
    }
  }
};
</script>
