<template>
  <div>
    <v-btn block :color="btnColor" @click="method">{{ buttonName }}</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      required: true,
    },
    btnColor: {
      type: String,
      required: true,
    },
    method: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style></style>
