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
        <v-col md="7">
          <v-file-input
            accept="image/*"
            label="画像ファイル"
            @change="changeImg"
          ></v-file-input>
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
        <v-col md="7">
          <div>
            <v-text-field v-model="product_url" :label="url" outlined />
          </div>
        </v-col>
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
      url: 'URLがあれば記入',
      product_title: '',
      product_detail: '',
      product_url: '',
      thumbnail: '',
      postData: {
        thumbnail: '',
      },
      getData: {
        thumbnail: '',
      },
    };
  },
  methods: {
    changeImg(e) {
      console.log(e);
      this.thumbnail = e;

      if (this.thumbnail) {
        const reader = new FileReader();
        reader.onload = () => {
          this.postData.thumbnail = reader.result + '';
        };
        reader.readAsDataURL(this.thumbnail);

        // this.submitImg(this.thumbnail);
      }
    },
    submitImg(thumbnail) {
      const storage = firebase.storage();
      const storageRef = storage.ref().child('file.png');
      storageRef
        .put(thumbnail)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    async postProduct() {
      const db = await firebase.firestore();
      const storage = await firebase.storage();
      const ref = db.collection('products').doc();
      const timestamp = firebase.firestore.Timestamp.now();
      return firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          ref.set({
            title: this.product_title,
            detail: this.product_detail,
            url: this.product_url,
            user: uid,
            id: ref.id,
            type: 'products',
            src: '',
            createdAt: timestamp,
            updateAt: timestamp,
          });
          const timeline = db.collection('timeline').doc();
          timeline
            .set({
              title: this.product_title,
              detail: this.product_detail,
              url: this.product_url,
              user: uid,
              id: ref.id,
              type: 'products',
              src: '',
              createdAt: timestamp,
              updateAt: timestamp,
            })
            .then(() => {
              const storageRef = storage
                .ref()
                .child('products/' + ref.id + '.png');
              const addURL = async () => {
                await storageRef
                  .put(this.thumbnail)
                  .then((res) => console.log(res))
                  .catch((error) => console.log(error));
                await storageRef.getDownloadURL().then((res) => {
                  console.log(res);
                  db.collection('products').doc(ref.id).update({
                    src: res,
                  });
                  db.collection('timeline').doc(timeline.id).update({
                    src: res,
                  });
                });
              };
              addURL();
              this.$router.push('/timeline');
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
