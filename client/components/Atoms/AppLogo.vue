<template>
  <div>
    <img class="app-logo" :style="logoStyle" src="/images/homerun.png" />
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    logoWidth: {
      type: [String],
      default: '150px',
    },
  },
  computed: {
    logoStyle() {
      return { '--width': this.logoWidth };
    },
  },
};
</script>

<style scoped></style>
