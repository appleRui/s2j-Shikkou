<template>
  <b-container>
    <div class="error-wrapper text-center">
      <img class="error-img" src="@/assets/images/404.png" alt="" />
      <p class="text-black text-center">
        エラーが発生しました<br />数時間後に再度実行ください
      </p>
      <NuxtLink class="btn btn-primary" style="margin: 0 auto" to="/"
        >トップページへ</NuxtLink
      >
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-wrapper {
  padding: 5rem 0;
  .error-img {
    display: block;
    margin: 0 auto;
    width: 390px;
  }
}
</style>