<template>
  <div class="form-contetn">
    <iframe
      :src="this.form_url"
      width="640"
      height="720"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >読み込んでいます…</iframe
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      form_url: process.env.GOOGLE_FORM + "?embedded=true",
    };
  },
};
</script>

<style lang="scss" scoped>
.form-contetn {
  position: relative;
  width: 100%;
  height: 80vh;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>