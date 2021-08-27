<template>
  <div>
    ほめルン☆ランキング
    <v-container>
      <v-row justify="center">
        <v-col v-for="n in 100" :key="n" md="10">
          <v-card to="/user">
            <v-card-title>
              <v-row>
                <v-col md="1">{{ n }}.</v-col>
                <v-col md="1">
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </v-col>
                <v-col
                  ><p>ユーザー{{ n }}</p></v-col
                >
                <v-col>ほめルン：{{ 200001 - n }}</v-col></v-row
              >
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
