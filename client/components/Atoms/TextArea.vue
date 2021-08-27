<template>
  <div class="text-field">
    <v-textarea outlined name="input-7-1" :label="areaLabel"></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    areaLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
