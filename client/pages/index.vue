<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <div class="margin">
            <v-img src="/images/homerurun.png"></v-img>
          </div>
        </v-col>
        <v-col md="12">
          <p class="text-h6 font-weight-bold catch">
            ほめルンです☆は就活生が褒めて褒められまくって就活に自信を持ってもらうアプリケーションです。
          </p>
        </v-col>
        <v-col md="5">
          <v-btn height="60px" block color="secondary" to="/signup"
            >はじめる！</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      thumbnail: '',
    };
  },
  methods: {
    changeImg(e) {
      this.thumbnail = e;
      console.log(this.thumbnail);
    },
    submitImg() {
      // ここでsubmitする
    },
  },
};
</script>

<style>
.margin {
  margin-top: 150px;
}
.catch {
  margin-top: 20px;
  text-align: center;
}
</style>
