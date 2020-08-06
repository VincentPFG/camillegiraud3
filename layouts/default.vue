<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item
          v-for="{ route, name } in nav"
          :key="name"
          @click="
            $vuetify.goTo(route)
            drawer = defaultDrawer
          "
        >
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar app color="primary" collapse dense> -->
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
    <!-- <v-toolbar-title>Camille GIRAUD</v-toolbar-title> -->
    <!-- <v-spacer />
      <Dark />
    </v-app-bar> -->
    <v-main>
      <v-container>
        <v-alert type="warning">
          Ce site est en cours de développement.
        </v-alert>
      </v-container>
      <nuxt />
    </v-main>

    <v-bottom-navigation app>
      <v-spacer />
      <v-btn @click="$vuetify.goTo('#contact')">
        Nous contacter
      </v-btn>
      <v-btn @click="$vuetify.goTo('#equipe')">
        Notre équipe
      </v-btn>
      <v-spacer />
      <Dark />
    </v-bottom-navigation>

    <v-footer app absolute color="primary">
      <v-row justify="center">
        Développé par Vincent GIRAUD
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      defaultDrawer: null,
      nav: [{ name: 'Nous contacter', route: '#contact' }],
      bar: null,
    }
  },
  mounted() {
    this.defaultDrawer = this.drawer
  },
  methods: {
    scroll() {
      this.bar = false
      // setInterval(() => (this.bar = false), 100)
      this.$vuetify.goTo('#equipe')
    },
  },
}
</script>
