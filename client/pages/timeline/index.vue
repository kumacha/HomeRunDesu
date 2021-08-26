<template>
  <div>
    <v-container
      ><v-row><p>新着投稿</p></v-row></v-container
    >
    <TimelineSlideShow />
  </div>
</template>

<script>
import TimelineSlideShow from '~/components/Organisms/TimelineSlideShow.vue';
export default {
  components: {
    TimelineSlideShow,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
