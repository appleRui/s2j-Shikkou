<template>
  <div class="form-contetn">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfkBo0Qssm236uYBB1myDyq3zBJg0Wx-Y-mO4qkMpoex35viQ/viewform?embedded=true"
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
    return {};
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