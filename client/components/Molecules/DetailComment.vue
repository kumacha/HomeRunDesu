<template>
  <div>
    <v-row justify="center">
      <v-col md="8">
        <TextArea :area-label="label" />
      </v-col>
      <v-col md="8"
        ><SubmitButton :button-name="name" :btn-color="color" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TextArea from '~/components/Atoms/TextArea.vue';
import SubmitButton from '~/components/Atoms/Button.vue';
export default {
  components: {
    TextArea,
    SubmitButton,
  },
  data() {
    return {
      label: 'コメントを入力',
      name: '超ほめルン☆（コメントを送信）',
      color: 'primary',
    };
  },
};
</script>

<style></style>
