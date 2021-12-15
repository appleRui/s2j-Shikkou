<template>
  <section class="contact">
    <b-container>
      <div class="contact-wrapper text-center">
        <h2 class="contact-wrapper--ttl">お問い合わせ</h2>
        <p class="contact-wrapper--sub-ttl">- contact -</p>
      </div>
      <form
        class="contact-form"
        name="sentMessage"
        novalidate="novalidate"
        action=""
      >
        <div class="contact-form__lg-content row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input
                class="contact-form__input form-control"
                id="name"
                type="text"
                placeholder="名前(必須)"
                required="required"
                name=""
                data-validation-required-message="Please enter your name."
              />
            </div>
            <div class="form-group">
              <input
                class="contact-form__input form-control"
                id="email"
                type="email"
                placeholder="学籍メールアドレス(必須)"
                required="required"
                name=""
                data-validation-required-message="Please enter your email address."
              />
            </div>
            <div class="form-group mb-md-0">
              <input
                class="contact-form__input form-control"
                id="subject"
                type="text"
                placeholder="件名(必須)"
                required="required"
                name=""
                data-validation-required-message="Please enter your phone number."
              />
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                contact-form__rg-content
                form-group form-group-textarea
                mb-md-0
              "
            >
              <textarea
                class="contact-form__textarea form-control"
                id="message"
                placeholder="メール内容"
                required="required"
                name=""
              ></textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
          <button
            class="btn btn-primary btn-lg"
            id="sendMessageButton"
            onClick="postToGoogle()"
            type="submit"
          >
            送信
          </button>
        </div>
      </form>
    </b-container>
  </section>
</template>

<script>
export default {
};
</script>

<style>
</style>