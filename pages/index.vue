<template>
  <div id="page-top">
    <MainVisual />
    <News :articles="articles" />
    <Works />
    <ContactForm :formData.sync="formData" @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: {
          name: "entry.554924998",
          data: "",
        },
        studentEmail: {
          name: "entry.677875180",
          data: "",
        },
        subject: {
          name: "entry.750897921",
          data: "",
        },
        content: {
          name: "entry.1095844342",
          data: "",
        },
      },
    };
  },
  async asyncData({ $axios }) {
    const url = `/v1/databases/${process.env.NOTION_DB}/query`;
    const current_day = new Date();
    const current_day_format = `${current_day.getFullYear()}-${
      current_day.getMonth() + 1
    }-${current_day.getDate()}`;
    const articles = await $axios.post(
      url,
      {
        filter: {
          and: [
            {
              property: "公開",
              checkbox: {
                equals: true,
              },
            },
            {
              property: "公開日",
              date: {
                on_or_before: current_day_format,
              },
            },
          ],
        },
      },
      {
        headers: {
          Authorization: "Bearer " + process.env.NOTION_TOKEN,
          "Notion-Version": "2021-08-16",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      articles: articles.data.results,
    };
  },
  methods: {
    handleSubmit() {
      const submitParams = new FormData();
      Object.keys(this.formData).forEach((input) => {
        submitParams.append(this.formData[input]["name"], this.formData[input]["data"]);
      });
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const formUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBXORU6jQT6e9nvOJaGd9bJQkPsHlHV8iqNc3txb48xv_xiw/formResponse";
      this.$axios
        .post(CORS_PROXY + formUrl, submitParams)
        .then((res) => {
          this.formData = "";
          this.$nextTick(() => {
            this.$bvModal.hide("configm");
          });
          alert("お問い合わせが正常に送信されました\nご連絡をお待ちください");
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>
