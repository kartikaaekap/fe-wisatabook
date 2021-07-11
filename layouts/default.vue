<template>
  <v-app>
    <v-app-bar
      :color="$vuetify.theme.dark ? '#121212' : 'white'"
      app
      elevate-on-scroll
    >
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>
        <div class="mt-3 mt-md-4">
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            class="pl-2"
            prepend-icon="mdi-weather-night"
            persistent-hint
          ></v-switch>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      v-if="$vuetify.breakpoint.name !== 'xs'"
      :color="$vuetify.theme.dark ? '#1E1E1E' : 'F5F5F5'"
      class="mt-5"
    >
      <v-container class="py-0 fill-height">
        <v-col>
          <span>© Wisatabook · </span>
          <span style="font-size: 14px"> Terms &amp; Condition</span>
        </v-col>
      </v-container>
    </v-footer>
    <v-footer v-else :color="$vuetify.theme.dark ? '#1E1E1E' : 'F5F5F5'">
    </v-footer>
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

<style>
/* .container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 924px) {
  .container {
    max-width: 924px !important;
  }
} */
</style>
