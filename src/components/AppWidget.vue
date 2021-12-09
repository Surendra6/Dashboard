<template>
  <v-hover v-slot="{ hover }" open-delay="100">
    <v-card :elevation="hover ? 10 : 5">
      <v-card-title class="text-h5 secondary--text">
        {{ appInfo.name }}
      </v-card-title>

      <v-card-subtitle>
        <span class="font-weight-medium">Tech Stack: </span>
        <span>{{ appInfo.techStack }}</span>
      </v-card-subtitle>

      <v-card-actions>
        <a
          :href="appInfo.link"
          target="_blank"
          class="
            app-link
            text-decoration-none
            primary--text
            font-weight-medium
            d-inline-block
            pa-2
          "
          >GO <v-icon small class="primary--text">mdi-open-in-new</v-icon></a
        >
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="grey--text text--darken-1">
            <span>{{ appInfo.description }}</span>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Profile",
  props: {
    appInfo: {
      type: Object,
      required: true,
    },
  },

  components: {},

  data: () => ({
    show: false,
  }),
};
</script>
