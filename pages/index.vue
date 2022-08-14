<template>
  <div id="page-top">
    <MainVisual />
    <News :articles="articles" />
    <Works />
    <Faq />
  </div>
</template>

<script>
import { notionRequestUrl, getAllNewsOptions } from '@/utils/notionRequestUtils';

export default {
  async asyncData ({ $notionClient }) {
    try {
      const { data } = await $notionClient.post(notionRequestUrl.getAllNews, getAllNewsOptions(5));
      return {
        articles: data.results
      };
    } catch (e) {
      console.error('Error', e);
    }
  }
};
</script>
