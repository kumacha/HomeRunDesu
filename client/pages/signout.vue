<template>
  <v-container>
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
<style scoped></style>
