<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="app in APP_LIST" :key="app.name" cols="4">
          <v-hover v-slot="{ hover }" open-delay="100">
            <v-card :elevation="hover ? 10 : 5">
              <v-card-title class="text-h5 secondary--text">
                {{ app.name }}
              </v-card-title>

              <v-card-subtitle>
                <span class="tech-stack">Tech Stack: </span>
                <span>{{ app.techStack }}</span>
              </v-card-subtitle>

              <v-card-actions>
                <a
                  :href="app.link"
                  target="_blank"
                  class="
                    app-link
                    text-decoration-none
                    primary--text
                    font-weight-medium
                    d-inline-block
                    pa-2
                  "
                  >GO
                  <v-icon small class="primary--text"
                    >mdi-open-in-new</v-icon
                  ></a
                >
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import APP_LIST from "../utils/config/appList.js";
export default {
  name: "Dashboard",

  components: {},

  data: () => ({
    APP_LIST: APP_LIST,
  }),
};
</script>

<style scoped>
.card {
  height: 150px;
}

.tech-stack {
  font-weight: 500;
}
</style>
