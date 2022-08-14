<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import './MainVisual.scss'
</style>

<template>
  <section class="mv">
    <b-container class="mv-wrapper text-center">
      <h2 class="mv-wrapper__welcome-txt">ようこそ</h2>
      <h2 class="mv-wrapper__welcome-ttl">二部執行委員会へ</h2>
      <b-button
        to="/contact"
        class="mv-wrapper__contact-btn"
        size="lg"
        variant="primary"
      >
        お問い合わせフォーム
      </b-button>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

