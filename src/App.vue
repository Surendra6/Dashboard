<template>
  <v-app>
    <Layout />
    <v-btn
      href="https://github.com/Surendra6/Dashboard/tree/main"
      target="_blank"
      class="accent--text"
      fab
      large
      bottom
      right
      fixed
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",

  components: {
    Layout,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
