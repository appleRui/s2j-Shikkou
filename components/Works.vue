<style lang="scss" scoped>
@import "./Works.scss"
</style>

<template>
  <section id="works">
    <b-container>
      <div class="ttl-content">
        <h2 class="ttl">活動内容</h2>
        <p class="txt">works</p>
      </div>
      <div class="works__cards row text-center">
        <div class="work-card col-md-4">
          <font-awesome-layers class="work-card__icon fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="school"
              transform="shrink-6"
              :style="{ color: 'white', width: '1em' }"
            />
          </font-awesome-layers>
          <h4 class="work-card__ttl my-3">学生大会</h4>
          <p class="work-card__txt text-left">
            学生大会は、自治会の最高決議機関です。前期には、委員会・部会の活動報告及び活動予定の承認、自治会予算の承認、執行委員の承認、前期・後期ともに特別委員会の設置及び構成員の承認があります。
          </p>
        </div>
        <div class="work-card col-md-4">
          <font-awesome-layers class="work-card__icon fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="clipboard"
              transform="shrink-6"
              :style="{ color: 'white' }"
            />
          </font-awesome-layers>
          <h4 class="work-card__ttl my-3">定例会</h4>
          <p class="work-card__txt text-left">
            定例会は、毎週土曜日に21時30分から行っております。そこでは役員がその週にあった出来事等を報告・連絡・相談しています。
          </p>
        </div>
        <div class="work-card col-md-4">
          <font-awesome-layers class="work-card__icon fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="bus"
              transform="shrink-6"
              :style="{ color: 'white' }"
            />
          </font-awesome-layers>
          <h4 class="work-card__ttl my-3">旭祭＆夏冬合宿</h4>
          <p class="work-card__txt text-left">
            旭祭では、例年焼きそばを提供しております。夏冬には交流を深めるめ一泊二日で合宿をおこなっております。
          </p>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>
