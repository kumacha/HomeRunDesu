<template>
  <div class="detail-view">
    <v-container>
      <v-row justify="center">
        <v-col md="8" class="item-title">
          <p class="text-h4 font-weight-bold">
            運営しているアプリのプロモーションWebサイト
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3"></v-col>
        <v-col class="pa-0" md="1">
          <v-icon large> mdi-account </v-icon>
        </v-col>
        <v-col class="pa-0" md="2"><p class="ma-0">ユーザー</p></v-col>
        <v-col class="pa-0" md="2"
          ><p class="ma-0">2021年9月19日（日）</p></v-col
        >
      </v-row>
      <v-row justify="center">
        <v-col md="8">
          <img width="100%" src="/images/port.png" />
          <v-chip color="#ff3912" text-color="white">成果物</v-chip
          ><v-chip color="primary" text-color="white">ガクチカ</v-chip>
          <v-chip color="accent" text-color="white">自己PR</v-chip>
          <v-chip color="secondary" text-color="white">研究・ゼミ</v-chip>
        </v-col>
      </v-row>
      <HomerunButtons />
      <v-row justify="center">
        <v-col md="8"
          ><p>
            これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介Webページです。これは大学の講義で制作した自分が運営に参加しているアプリの紹介
          </p></v-col
        >
        <v-col md="8">
          <a href="http://localhost:3000/timeline/introduces"
            >参考URL： http://localhost:3000/timeline/introduces</a
          >
        </v-col>
      </v-row>
      <HomerunButtons />
      <Comment />
    </v-container>
  </div>
</template>

<script>
import Comment from '~/components/Molecules/DetailComment.vue';
import HomerunButtons from '~/components/Molecules/HomerunButtons.vue';
export default {
  components: {
    Comment,
    HomerunButtons,
  },
  data() {
    return {};
  },
};
</script>

<style>
.detail-view {
  margin-top: 10vh;
}
.item-title {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
