<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <p class="post_title">成果物投稿ページ</p>
        </v-col>
        <v-col cols="12">
          <v-img
            class="post_img"
            max-width="250px"
            src="/images/post/post3.png"
          ></v-img>
        </v-col>
        <v-col md="7">
          <div>
            <v-text-field v-model="product_title" :label="title" outlined />
          </div>
        </v-col>
        <v-col md="7"
          ><div class="text-field">
            <v-textarea
              v-model="product_detail"
              outlined
              name="input-7-1"
              :label="textarea"
            ></v-textarea></div
        ></v-col>
        <v-col md="6"
          ><PostButton
            :button-name="name"
            :btn-color="color"
            :method="postProduct"
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
      textarea: '今まで開発・制作したものを紹介してみよう！',
      name: '投稿',
      color: 'primary',
      product_title: '',
      product_detail: '',
    };
  },
  methods: {
    postProduct() {
      const db = firebase.firestore();
      const ref = db.collection('products').doc();
      const timestamp = firebase.firestore.Timestamp.now();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          ref
            .set({
              title: this.product_title,
              detail: this.product_detail,
              author: uid,
              id: ref.id,
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              alert('成果物PRを投稿しました');
              this.$router.push({
                name: 'timeline-products-id',
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
