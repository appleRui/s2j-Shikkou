<template>
  <section class="works">
    <b-container>
      <div class="work-wrapper text-center">
        <h2 class="work-wrapper--ttl">活動内容</h2>
        <p class="work-wrapper--sub-ttl">- works -</p>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <font-awesome-layers class="fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="school"
              transform="shrink-6"
              :style="{ color: 'white', width: '1em'  }"
            />
          </font-awesome-layers>
          <h4 class="my-3">学生大会</h4>
          <p style="text-align: start">
            学生大会は、自治会の最高決議機関です。前期には、委員会・部会の活動報告及び活動予定の承認、自治会予算の承認、執行委員の承認、前期・後期ともに特別委員会の設置及び構成員の承認があります。
          </p>
        </div>
        <div class="col-md-4">
          <font-awesome-layers class="fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="clipboard"
              transform="shrink-6"
              :style="{ color: 'white' }"
            />
          </font-awesome-layers>
          <h4 class="my-3">定例会</h4>
          <p style="text-align: start">
            定例会は、毎週水曜日に21時30分から行っております。そこでは役員がその週にあった出来事等を報告・連絡・相談しています。
          </p>
        </div>
        <div class="col-md-4">
          <font-awesome-layers class="fa-5x">
            <font-awesome-icon icon="circle" />
            <font-awesome-icon
              icon="bus"
              transform="shrink-6"
              :style="{ color: 'white' }"
            />
          </font-awesome-layers>
          <h4 class="my-3">旭祭＆夏冬合宿</h4>
          <p style="text-align: start">
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

<style>
</style>