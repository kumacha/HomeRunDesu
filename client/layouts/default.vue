<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-for="(link, index) in links" :key="index">
        <v-btn :to="link.to">{{ link.name }}</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ほめルンです☆',
      links: [
        { name: 'サインイン', to: 'signin' },
        { name: 'タイムライン', to: 'timeline' },
        { name: 'ランキング', to: 'ranking' },
        { name: '投稿', to: 'post' },
        { name: '通知', to: 'notify' },
        { name: 'プロフィール', to: 'user' },
      ],
    };
  },
  methods: {
    goRouter(link) {
      this.router.push(link);
    },
  },
};
</script>
