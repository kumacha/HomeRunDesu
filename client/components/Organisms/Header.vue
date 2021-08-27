<template>
  <div>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn><v-icon> mdi-account </v-icon></v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-for="(link, index) in links" :key="index">
        <v-btn :to="link.to">{{ link.name }}</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      title: 'ほめルンです☆',
      links: [
        { name: 'サインイン', to: '/signin' },
        { name: 'タイムライン', to: '/timeline' },
        { name: 'ランキング', to: '/ranking' },
        { name: '投稿', to: '/post' },
        { name: '通知', to: '/notify' },
        { name: 'プロフィール', to: '/user' },
      ],
    };
  },
  created: {
    // getPath() {
    //   if (this.$route.path === '/') {
    //     this.show = false;
    //   } else {
    //     this.show = true;
    //   }
    // },
  },
  methods: {
    goRouter(link) {
      this.router.push(link);
    },
    backRouter() {
      this.router.go(-1);
    },
  },
};
</script>
