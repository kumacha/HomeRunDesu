<template>
  <div>
    <v-row justify="center">
      <v-col md="4">
        <Button :button-name="one_name" :btn-color="one_color"></Button>
      </v-col>
      <v-col md="4">
        <Button :button-name="two_name" :btn-color="two_color"></Button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Button from '~/components/Atoms/Button.vue';
export default {
  components: {
    Button,
  },
  data() {
    return {
      one_name: 'ほめルン☆',
      two_name: '超ほめルン☆',
      one_color: 'primary',
      two_color: 'secondary',
    };
  },
};
</script>

<style></style>
