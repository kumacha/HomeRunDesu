<template>
  <div>
    <p class="text-h4 font-weight-bold timeline_title">TimeLine</p>
    <TimelineSlideShow />
    <!-- <v-row v-for="n in 10" :key="n" justify="center">
      <v-col md="3"></v-col>
      <v-col md="6"
        ><v-card to="/timeline/introduces">
          <v-img src="images/port.png"></v-img>
          <v-chip color="#ff3912" text-color="white">成果物</v-chip
          ><v-chip color="primary" text-color="white">ガクチカ</v-chip>
          <v-chip color="accent" text-color="white">自己PR</v-chip>
          <v-chip color="secondary" text-color="white">研究・ゼミ</v-chip>
          <v-card-title>大学の講義で制作したWebページ</v-card-title>
          <v-card-subtitle
            >これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介...</v-card-subtitle
          >

          <v-row class="pa-1">
            <v-col md="1">
              <v-icon large> mdi-account </v-icon>
            </v-col>
            <v-col md="2"><p class="ma-0">ユーザー</p></v-col>
            <v-col md="3">
              <v-badge
                :content="messages"
                :value="messages"
                color="green"
                overlap
              >
                <v-btn color="primary" text-color="white">ほめルン☆</v-btn>
              </v-badge> </v-col
            ><v-col md="3">
              <v-badge
                :content="messages"
                :value="messages"
                color="green"
                overlap
                ><v-btn color="primary" text-color="white"
                  >超ほめルン☆</v-btn
                ></v-badge
              ></v-col
            >
          </v-row>
        </v-card></v-col
      >
      <v-col md="3"></v-col>
    </v-row> -->
    <Timeline />
  </div>
</template>

<script>
import TimelineSlideShow from '~/components/Organisms/TimelineSlideShow.vue';
import Timeline from '~/components/Organisms/Timeline.vue';
export default {
  components: {
    TimelineSlideShow,
    Timeline,
  },
  data() {
    return {
      messages: '10000',
    };
  },
};
</script>

<style>
.timeline_title {
  text-align: center;
}
</style>
