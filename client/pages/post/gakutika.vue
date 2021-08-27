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
            max-width="300px"
            src="/images/post/post2.png"
          ></v-img>
        </v-col>
        <v-col md="7">
          <title-field :label="title"></title-field>
        </v-col>
        <v-col md="7"><TextArea :area-label="textarea" /> </v-col>
        <v-col md="6"><PostButton :button-name="name" /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TitleField from '../../components/Atoms/TitleField.vue';
import TextArea from '../../components/Atoms/TextArea.vue';
import PostButton from '../../components/Atoms/Button.vue';
export default {
  components: {
    TitleField,
    TextArea,
    PostButton,
  },
  data() {
    return {
      title: 'タイトル',
      textarea: 'ガクチカ',
      name: '投稿',
      setSelfPR: '',
    };
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
