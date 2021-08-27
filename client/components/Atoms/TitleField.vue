<template>
  <v-container>
    <div>
      <v-text-field :label="label" outlined />
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
