<template>
  <v-container>
    <div class="projects-view">
      <v-row justify="center">
        <v-col v-for="(item, index) in timeline" :key="index" cols="8">
          <v-card
            elevation="2"
            :to="{ path: '/timeline/' + item.type + '/' + item.id }"
            ><v-img max-height="400px" :src="item.src"></v-img>
            <v-card-title class="member-title" v-text="item.title">
            </v-card-title>
            <v-card-subtitle v-text="item.detail"> </v-card-subtitle
          ></v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      title: '',
      detail: '',
      start: '',
      finish: '',
      timeline: [],
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const dbTimeline = db
          .collection('timeline')
          .orderBy('createdAt', 'desc');
        dbTimeline.get().then((query) => {
          query.forEach((doc) => {
            const timeline = doc.data();
            this.timeline = [
              ...this.timeline,
              {
                title: timeline.title,
                detail: timeline.detail,
                uid: timeline.user,
                type: timeline.type,
                src: timeline.src,
                id: timeline.id,
              },
            ];
          });
        });
      }
    });
  },
  methods: {
    toProject() {
      this.$router.push(`/project/${this.project.joinUserId}`);
    },
  },
};
</script>
<style>
.project-view {
  margin-top: 100px;
}
</style>
