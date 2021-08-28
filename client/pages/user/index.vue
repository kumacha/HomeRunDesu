<template>
  <div>
    ユーザーの個人ページ
    <v-container>
      <v-row justify="center">
        <v-col md="6"
          ><v-card>
            <v-row>
              <v-col md="3">
                <v-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col md="6"><p>ユーザー</p></v-col>
              <v-col md="3"><v-btn>編集</v-btn></v-col>
              <v-col>ほめルン：20,000</v-col>
            </v-row>
          </v-card></v-col
        >
      </v-row>
      <v-row>この下に投稿したアイテムをいれる</v-row>
      <v-row wrap justify="center" align="center">
        <v-col>
          <p class="text-center">ログアウトはコチラから。</p>
          <div class="pa-5">
            <v-btn block outlined color="#2BB7A4" @click="signOut">
              ログアウト
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('ログアウトしました。');
          this.$router.push('/signin');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
