<template>
  <b-navbar
    class="header"
    toggleable="lg"
    variant="faded"
    type="light"
    fixed="top"
  >
    <b-container fluid>
      <b-navbar-brand class="heaader__logo" tag="h1" to="/"
        ><img
          class="heaader__logo-img"
          src="https://www.dendai.ac.jp/common/images/global/logo_01.svg"
          alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="articles">お知らせ</b-nav-item>
          <b-nav-item to="/#works">活動内容</b-nav-item>
          <b-nav-item to="/#faq">よくある質問</b-nav-item>
          <b-nav-item toggle-class="text-primary" to="/contactForm"
            >お問い合わせ</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.heaader {
  &__logo {
    &-img {
      height: 32px;
    }
  }
}
.nav-item {
  .nav-item {
    .nav-item {
      a {
        color: #fff !important;
      }
    }
  }
}
@include media-breakpoint-down(sm) {
  .heaader {
    &__logo {
      &-img {
        height: 27px;
      }
    }
  }
}
</style>
