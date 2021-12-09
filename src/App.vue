<template>
  <v-app>
    <Layout />
    <v-tooltip bottom color="primary">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          class="accent--text info--top info--fixed info--right info--large"
          >mdi-information</v-icon
        >
      </template>
      <span>Click on GO link to explore the applications</span>
    </v-tooltip>

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

<style lang="scss" scoped>
.info {
  &--top {
    top: 100px;
  }
  &--fixed {
    z-index: 4;
    position: fixed;
  }
  &--right {
    right: 30px;
  }
  &--large {
    height: 35px;
    font-size: 35px;
    width: 35px;
  }
}
</style>
