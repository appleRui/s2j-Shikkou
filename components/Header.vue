<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import './Header'
</style>

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
          <b-nav-item 
            v-for="nav in navigations"
            :key="nav.title" 
            :to="nav.to"
          >{{ nav.title }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data(){
    return {
      navigations: [
        {
          title: "お知らせ",
          to: "/articles"
        },
        {
          title: "活動内容",
          to: "/#works"
        },
        {
          title: "よくある質問",
          to: "/#faq"
        },
        {
          title: "お問い合わせ",
          to: "/contact"
        },
      ]
    }
  }
};
</script>

