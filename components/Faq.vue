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
          <dt class="faq-row__question">執行委員会の見学はいつでもできますか？</dt>
          <dt class="faq-row__answer">いつでも可能です。毎週土曜日21:30からオンラインで定例会を行っておりますので、TwitterのDMまたはお問い合わせフォームからご連絡ください</dt>
        </dl>
        <dl class="faq-row">
          <dt class="faq-row__question">執行委員会の入部には入部届や退部届はありますか？</dt>
          <dt class="faq-row__answer">ございません。入部1年目は執行補佐として勤めてもらい2年目から執行委員として勤めていただきます</dt>
        </dl>
        <dl class="faq-row">
          <dt class="faq-row__question">夜間部の人でも中間部のサークルに入ることは可能ですか？</dt>
          <dt class="faq-row__answer">入部したい団体に直接連絡を取るか本委員会にご相談ください</dt>
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
