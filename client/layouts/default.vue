<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-btn v-if="!path_valid"><v-icon> mdi-account </v-icon></v-btn> -->
      <nuxt-link to="/timeline">
        <AppLogo />
      </nuxt-link>
      <v-spacer />

      <div
        v-for="(object, index) in objects"
        :key="index"
        class="navigation-button"
      >
        <v-btn :to="object.to" :text="true">{{ object.name }}</v-btn>
        <v-spacer />
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppLogo from '~/components/Atoms/AppLogo.vue';
export default {
  components: {
    AppLogo,
  },
  data() {
    return {
      // path_valid: this.$route.path === '/',
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ほめルンです☆',
      objects: [
        // { name: 'サインイン', to: '/signin' },
        { name: 'タイムライン', to: '/timeline' },
        { name: '投稿', to: '/post' },
        { name: 'ランキング', to: '/ranking' },
        { name: '通知', to: '/notify' },
        { name: 'プロフィール', to: '/user' },
      ],
    };
  },
  methods: {
    goRouter(link) {
      this.router.push(link);
      this.reload();
    },
  },
};
</script>
