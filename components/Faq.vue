<template>
  <section id="faq">
    <b-container>
      <div class="ttl-content">
        <h2 class="ttl">よくある質問</h2>
        <p class="txt">FAQ</p>
      </div>
      <div class="faq-wrapper">
        <dl class="faq-row">
          <dt class="faq-row__question">
            執行委員会への見学をしたいのですがどうすればいいですか？
          </dt>
          <dt class="faq-row__answer">
            ホームページの上にございますお問い合わせフォームからご連絡ください
          </dt>
        </dl>
        <dl class="faq-row">
          <dt class="faq-row__question">質問分</dt>
          <dt class="faq-row__answer">回答分</dt>
        </dl>
        <dl class="faq-row">
          <dt class="faq-row__question">質問分</dt>
          <dt class="faq-row__answer">回答分</dt>
        </dl>
        <dl class="faq-row">
          <dt class="faq-row__question">質問分</dt>
          <dt class="faq-row__answer">回答分</dt>
        </dl>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#faq {
  padding: 4rem 0;
  .faq-row {
    font-size: 20px;
    margin-bottom: 2rem; //各Q&Aの下に余白
    &__question,
    &__answer {
      position: relative;
      padding: 0.5rem 1.5rem;
    }
    &__question::before,
    &__answer::before {
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    &__question {
      font-weight: bold; //質問文は太字にしてみました
      border-bottom: 1px solid #999;
      margin-bottom: 4px;
      &::before {
        content: "Q.";
        color: #ff1111;
      }
    }
    &__answer {
      &::before {
        content: "A.";
        color: #0eacfb;
      }
    }
  }
}
</style>
