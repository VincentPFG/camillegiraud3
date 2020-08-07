<template>
  <Spacer>
    <v-parallax src="devanture.jpg">
      <v-row align="center" justify="center">
        <Spacer>
          <h1 class="text-h2">
            Camille GIRAUD
          </h1>
          <h1 class="text-h2 font-italic font-weight-thin">
            Entretien Espaces Verts
          </h1>
        </Spacer>
      </v-row>
    </v-parallax>

    <v-container id="contact">
      <Spacer>
        <h2 class="text-h3">
          Nous contacter
        </h2>
        <Contact />
      </Spacer>
    </v-container>

    <v-parallax src="jardin.jpg" />

    <v-container id="equipe">
      <Spacer>
        <h2 class="text-h3">
          Notre équipe
        </h2>
        <v-alert type="warning">
          Cette section est en attente du contenu nécessaire.
        </v-alert>
        <Equipe />
      </Spacer>
    </v-container>

    <v-parallax src="mare.jpg" />
  </Spacer>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}
</style>
