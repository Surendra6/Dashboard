<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="app in APP_LIST" :key="app.name" cols="4">
          <AppWidget :appInfo="app" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import APP_LIST from "../utils/config/appList.js";
import AppWidget from "../components/AppWidget.vue";
export default {
  name: "Dashboard",

  components: {
    AppWidget,
  },

  data: () => ({
    APP_LIST: APP_LIST,
  }),
};
</script>

<style scoped>
.card {
  height: 150px;
}
</style>
