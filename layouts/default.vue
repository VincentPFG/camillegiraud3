<template>
  <v-app>
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
      <v-row justify="center" class="white--text">
        Développé par Vincent GIRAUD
      </v-row>
    </v-footer>
  </v-app>
</template>
