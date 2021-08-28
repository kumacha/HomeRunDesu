<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <p class="post_title">自己PR投稿ページ</p>
        </v-col>
        <v-col cols="12">
          <v-img
            class="post_img"
            max-width="250px"
            src="/images/post/post1.png"
          ></v-img>
        </v-col>
        <v-col md="7">
          <div>
            <v-text-field v-model="introduce_title" :label="title" outlined />
          </div>
        </v-col>
        <v-col md="7"
          ><div class="text-field">
            <v-textarea
              v-model="introduce_detail"
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
            :method="postIntro"
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
      textarea: '自己PR',
      name: '投稿',
      color: 'primary',
      introduce_title: '',
      introduce_detail: '',
    };
  },
  methods: {
    postIntro() {
      const db = firebase.firestore();
      const ref = db.collection('introduces').doc();
      const timestamp = firebase.firestore.Timestamp.now();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          ref.set({
            title: this.introduce_title,
            detail: this.introduce_detail,
            user: uid,
            id: ref.id,
            type: 'introduces',
            createdAt: timestamp,
            updateAt: timestamp,
          });
          const timeline = db.collection('timeline').doc();
          timeline
            .set({
              title: this.introduce_title,
              detail: this.introduce_detail,
              user: uid,
              id: ref.id,
              type: 'introduces',
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              alert('自己PRを投稿しました');
              this.$router.push({
                name: 'timeline-introduces-id',
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
