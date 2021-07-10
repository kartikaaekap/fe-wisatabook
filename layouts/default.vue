<template>
  <v-app>
    <v-container class="mx-4">
      <v-app-bar
        :color="$vuetify.theme.dark ? '#121212' : 'white'"
        app
        elevate-on-scroll
      >
        <v-spacer></v-spacer>
        <v-icon color="primary"> mdi-weather-night </v-icon>
        <v-switch
          v-model="$vuetify.theme.dark"
          class="mt-5 ml-2"
          inset
          persistent-hint
        ></v-switch>
      </v-app-bar>
    </v-container>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <v-col>
        <span>&copy;Wisatabook · </span>
        <span style="font-size: 14px"> Terms &amp; Condition</span>
      </v-col>
    </v-footer>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
