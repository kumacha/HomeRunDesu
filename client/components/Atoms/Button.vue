<template>
  <div>
    <v-btn block :color="btnColor">{{ buttonName }}</v-btn>
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
  },
};
</script>

<style></style>
