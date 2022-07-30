<style lang="scss" scoped>
#works {
  padding: 4rem 0;
}
</style>

<template>
  <section id="works">
    <b-container>
      <div class="ttl-content">
        <h2 class="ttl">活動内容</h2>
        <p class="txt">works</p>
      </div>
      <div class="works__cards row text-center">
        <div v-for="content in contents" :key="content.title" class="work-card col-md-4">
          <font-awesome-layers class="work-card__icon fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              :icon="content.icon"
              transform="shrink-6"
              :style="{ color: 'white', width: '1em' }"
            />
          </font-awesome-layers>
          <h4 class="work-card__ttl my-3">{{ content.title }}</h4>
          <client-only placeholder="Loading...">
            <nuxt-content class="text-left" :document="content.page"/>
          </client-only>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  data(){
    return {
      contents: []
    }
  },
  async created() {
    const contents = [
      {
        title: "学生大会",
        icon: "school",
        fileName: "studentCouncil"
      },
      {
        title: "定例会",
        icon: "clipboard",
        fileName: "regularMeeting"
      },
      {
        title: "旭祭＆夏冬合宿",
        icon: "bus",
        fileName: "cultureFestival"
      },
    ]
    contents.forEach(async (content) => {
      const page = await this.$content(content.fileName).fetch()
      content['page'] = page
    });
    this.contents = contents
  }
};
</script>
