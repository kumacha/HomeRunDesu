<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <p class="post_title">ガクチカ投稿ページ</p>
        </v-col>
        <v-col cols="12">
          <v-img
            class="post_img"
            max-width="250px"
            src="/images/post/post2.png"
          ></v-img>
        </v-col>
        <v-col md="7">
          <div>
            <v-text-field v-model="experience_title" :label="title" outlined />
          </div>
        </v-col>
        <v-col md="7"
          ><div class="text-field">
            <v-textarea
              v-model="experience_detail"
              outlined
              name="input-7-1"
              :label="textarea"
            ></v-textarea>
          </div>
        </v-col>
        <v-col md="6"
          ><PostButton
            :button-name="name"
            :btn-color="color"
            :method="postExperience"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PostButton from '../../components/Atoms/Button.vue';
import firebase from '~/plugins/firebase';
export default {
  components: {
    PostButton,
  },
  data() {
    return {
      title: 'タイトル',
      textarea: 'ガクチカ',
      name: '投稿',
      color: 'primary',
      experience_title: '',
      experience_detail: '',
    };
  },
  methods: {
    postExperience() {
      const db = firebase.firestore();
      const ref = db.collection('experiences').doc();
      const timestamp = firebase.firestore.Timestamp.now();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          ref
            .set({
              title: this.experience_title,
              detail: this.experience_detail,
              author: uid,
              id: ref.id,
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              alert('ガクチカを投稿しました');
              this.$router.push({
                name: 'timeline-experiences-id',
                params: { id: ref.id },
              });
            });
        } else {
          alert('ログインしてください');
        }
      });
    },
  },
};
</script>

<style scoped>
.post_img {
  margin: 0 auto;
}
.post_title {
  text-align: center;
}
</style>
