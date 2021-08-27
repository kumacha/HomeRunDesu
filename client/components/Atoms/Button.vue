<template>
  <div>
    <v-btn block color="primary">{{ buttonName }}</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
