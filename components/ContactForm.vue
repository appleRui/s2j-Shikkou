<template>
  <section class="contact">
    <b-container>
      <div class="contact-wrapper text-center">
        <h2 class="contact-wrapper--ttl">お問い合わせ</h2>
        <p class="contact-wrapper--sub-ttl">- contact -</p>
      </div>
      <validation-observer ref="obs" v-slot="ObserverProps">
        <form class="contact-form" name="sentMessage">
          <div class="contact-form__lg-content row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <validation-provider
                  v-slot="ProviderProps" name="名前"
                  rules="required"
                >
                  <b-form-input
                    v-model="setFormData.name"
                    id="name"
                    class="contact-form__input form-control"
                    placeholder="名前(必須)"
                    required
                  ></b-form-input>
                  <div class="error">{{ ProviderProps.errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="ProviderProps" rules="required|email" name="メールアドレス">
                  <b-form-input
                    v-model="setFormData.studentEmail"
                    type="email"
                    id="email"
                    class="contact-form__input form-control"
                    placeholder="学籍メールアドレス(必須)"
                    required
                  ></b-form-input>
                  <div class="error">{{ ProviderProps.errors[0] }}</div>
                </validation-provider>
              </div>
              <div class="form-group mb-md-0">
                <validation-provider v-slot="ProviderProps" rules="required|min:3" name="件名">
                  <b-form-input
                    v-model="setFormData.subject"
                    id="subject"
                    class="contact-form__input form-control"
                    placeholder="件名(必須)"
                    required
                  ></b-form-input>
                  <div class="error">{{ ProviderProps.errors[0] }}</div>
                </validation-provider>
              </div>
            </div>
            <div class="col-md-6">
              <validation-provider v-slot="ProviderProps" rules="required|min:12" name="お問い合わせ内容">
                <b-form-textarea
                  class="contact-form__textarea form-control"
                  id="contetn"
                  v-model="setFormData.content"
                  placeholder="メール内容"
                  required
                ></b-form-textarea>
                <div class="error">{{ ProviderProps.errors[0] }}</div>
              </validation-provider>
            </div>
          </div>
          <div v-show="!ObserverProps.invalid" class="text-right">
            <div id="success"></div>
            <b-button
              class="btn btn-primary"
              id="sendMessageButton"
              variant="primary"
              v-b-modal.configm
              :disabled="ObserverProps.invalid || !ObserverProps.validated"
            >
              確認
            </b-button>
          </div>
        </form>
      </validation-observer>
    </b-container>
    <b-modal scrollable id="configm" title="確認画面" @ok="handleOk">
      <div class="configm-wrapper">
        <p class="configm-wrapper__label"><b>名前</b></p>
        <p class="configm-wrapper__name">{{ setFormData.name }}</p>
        <p class="configm-wrapper__label"><b>学籍メールアドレス</b></p>
        <p class="configm-wrapper__email">{{ setFormData.studentEmail }}</p>
        <p class="configm-wrapper__label"><b>件名</b></p>
        <p class="configm-wrapper__subject">{{ setFormData.subject }}</p>
        <p class="configm-wrapper__label"><b>問い合わせ内容</b></p>
        <p class="configm-wrapper__content">{{ setFormData.content }}</p>
      </div>
    </b-modal>
  </section>
  <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: {},
    },
  },
  computed: {
    setFormData: {
      get() {
        return this.formData;
      },
      set(newVal) {
        return this.$emit("update:formData", formData);
      },
    },
  },
  methods: {
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      this.formData = "";
      this.$nextTick(() => {
        this.$bvModal.hide("configm");
      });
    },
  },
};
</script>

<style>
</style>