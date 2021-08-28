<template>
  <div class="detail-view">
    <v-container>
      <v-row justify="center">
        <v-col md="8" class="item-title">
          <p class="text-h4 font-weight-bold">
            {{ title }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3"></v-col>
        <v-col class="pa-0" md="1">
          <v-icon large> mdi-account </v-icon>
        </v-col>
        <v-col class="pa-1" md="2"
          ><p class="ma-0">{{ name }}</p></v-col
        >
        <v-col class="pa-1" md="2"
          ><p class="ma-0">2021年9月19日（日）</p></v-col
        >
        <v-col md="2">
          <v-chip color="accent" text-color="white">{{ type }}</v-chip>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="8"
          ><p>
            {{ detail }}
          </p></v-col
        >
      </v-row>
      <HomerunButtons />
      <Comment />
    </v-container>
  </div>
</template>

<script>
import Comment from '~/components/Molecules/DetailComment.vue';
import HomerunButtons from '~/components/Molecules/HomerunButtons.vue';
import firebase from '~/plugins/firebase';
export default {
  components: {
    Comment,
    HomerunButtons,
  },
  data() {
    return {
      introduces: [],
      users: [],
      title: '',
      detail: '',
      id: '',
      type: '',
      uid: '',
      name: '',
      email: '',
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const dbIntro = db
          .collection('introduces')
          .where('id', '==', this.$route.params.id);
        dbIntro.get().then((query) => {
          query.forEach((doc) => {
            const introduces = doc.data();
            this.introduces = [
              ...this.introduces,
              {
                title: introduces.title,
                detail: introduces.detail,
                id: introduces.id,
                type: introduces.type,
                uid: introduces.user,
              },
            ];
            this.title = this.introduces[0].title;
            this.detail = this.introduces[0].detail;
            this.id = this.introduces[0].id;
            this.type = this.introduces[0].type;
            this.uid = this.introduces[0].uid;
            const dbUser = db.collection('users').where('uid', '==', this.uid);
            dbUser.get().then((query) => {
              query.forEach((doc) => {
                const users = doc.data();
                this.name = users.name;
                this.users = [
                  ...this.users,
                  {
                    name: users.name,
                    email: users.email,
                    uid: users.uid,
                  },
                ];
                this.name = this.users[0].name;
                this.email = this.users[0].email;
              });
            });
          });
        });
      }
    });
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
