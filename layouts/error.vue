<style lang="scss" scoped>
.error {
  min-height: 90vh;
}
</style>

<template>
  <div class="error d-flex justify-content-center align-items-center">
    <div class="error__inner text-center">
      <img
        v-if="error.statusCode === 404"
        class="w-25 h-25"
        src="../assets/img/404.png"
        alt="error-img"
      />
      <h1>{{ error.statusCode }}</h1>
      <h2>{{ error.message }}</h2>
      <!-- {{ error }} -->
      <a
        v-if="this.$route.path === '/'"
        class="btn btn-primary btn-sm"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfkBo0Qssm236uYBB1myDyq3zBJg0Wx-Y-mO4qkMpoex35viQ/viewform"
        >お問い合わせ</a
      >
      <NuxtLink
        v-if="this.$route.path !== '/'"
        class="btn btn-primary btn-sm"
        to="/"
        >トップページへ</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>