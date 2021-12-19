<template>
  <section class="mv">
    <b-container class="mv-wrapper text-center">
      <h2 class="mv-wrapper__welcome-txt">ようこそ</h2>
      <h2 class="mv-wrapper__welcome-ttl">二部執行委員会へ</h2>
      <b-button
        to="/contactForm"
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

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.mv {
  background-image: url("@/assets/images/mv.png");
  background-position: center;
  background-size: cover;

  &-wrapper {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    color: #ffffff;

    &__welcome-txt {
      font-size: 2.25rem;
      line-height: 2.25rem;
      margin-bottom: 2rem;
    }

    &__welcome-ttl {
      font-size: 4.5rem;
      font-weight: 700;
      line-height: 4.5rem;
      margin-bottom: 4rem;
    }
  }
}
@include media-breakpoint-down(sm) {
  .mv {
    &-wrapper {
      &__welcome-txt {
        margin-bottom: 0.5rem;
        font-size: 2rem;
      }

      &__welcome-ttl {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>