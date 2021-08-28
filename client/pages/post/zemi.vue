<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <p class="post_title">研究・ゼミ投稿ページ</p>
        </v-col>
        <v-col cols="12">
          <v-img
            class="post_img"
            max-width="250px"
            src="/images/post/post4.png"
          ></v-img>
        </v-col>
        <v-col md="7">
          <div>
            <v-text-field v-model="zemi_title" :label="title" outlined />
          </div>
        </v-col>
        <v-col md="7"
          ><div class="text-field">
            <v-textarea
              v-model="zemi_detail"
              outlined
              name="input-7-1"
              :label="textarea"
            ></v-textarea></div
        ></v-col>
        <v-col md="7">
          <div>
            <v-text-field v-model="zemi_url" :label="url" outlined />
          </div>
        </v-col>
        <v-col md="6"
          ><PostButton
            :button-name="name"
            :btn-color="color"
            :method="postZemi"
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
      textarea: '研究テーマやゼミでの出来事、学会経験など',
      name: '投稿',
      color: 'primary',
      url: 'URLがあれば入力',
      zemi_title: '',
      zemi_detail: '',
      zemi_url: '',
    };
  },
  methods: {
    postZemi() {
      const db = firebase.firestore();
      const ref = db.collection('zemis').doc();
      const timestamp = firebase.firestore.Timestamp.now();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          ref.set({
            title: this.zemi_title,
            detail: this.zemi_detail,
            url: this.zemi_url,
            user: uid,
            id: ref.id,
            type: 'zemis',
            createdAt: timestamp,
            updateAt: timestamp,
          });
          const timeline = db.collection('timeline').doc();
          timeline
            .set({
              title: this.zemi_title,
              detail: this.zemi_detail,
              url: this.zemi_url,
              user: uid,
              id: ref.id,
              type: 'zemis',
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              alert('研究テーマ・ゼミ活動を投稿しました');
              this.$router.push({
                name: 'timeline-zemi-id',
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
