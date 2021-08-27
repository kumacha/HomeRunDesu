<template>
  <div class="page">
    <form class="form" @submit.prevent="submitImg">
      <input type="file" accept="img/*" @change="changeImg" />
      <button type="submit" class="button">click</button>
    </form>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped></style>
