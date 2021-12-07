<template>
  <v-app class="layout">
    <v-app-bar app color="white" flat>
      <v-tabs v-model="tab" centered class="ml-n9">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar size="48">
              <img src="../assets/images/surendra.jpg" alt="SG" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar size="60">
                <img src="../assets/images/surendra.jpg" alt="SG" />
              </v-avatar>
              <h3>{{ USER_DETAILS.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ USER_DETAILS.email }}
              </p>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-sheet min-height="100vh" rounded="lg" class="pa-4">
              <v-tabs-items v-model="tab">
                <v-tab-item> <Dashboard /> </v-tab-item>
                <v-tab-item> <Profile /> </v-tab-item>
              </v-tabs-items>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Profile from "./Profile.vue";
import Dashboard from "./Dashboard.vue";
import USER_DETAILS from "../utils/config/user.js";
export default {
  data: () => ({
    USER_DETAILS: USER_DETAILS,
    tab: null,
    links: ["Dashboard", "Profile"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  components: {
    Dashboard,
    Profile,
  },
};
</script>
<style scoped>
.layout {
  background: #bdbdbd;
}
</style>