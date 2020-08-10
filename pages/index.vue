<template>
  <div>
    <v-parallax src="img/devanture.jpg">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="text-h2">
            Camille GIRAUD
          </h1>
        </v-col>
        <v-col cols="12">
          <h1 class="text-h2 font-italic font-weight-thin">
            Entretien Espaces Verts
          </h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container id="contact">
      <h2 class="text-h3">
        Nous contacter
      </h2>
      <Contact />
    </v-container>

    <v-parallax src="img/jardin.jpg" />

    <v-container id="equipe">
      <h2 class="text-h3">
        Notre équipe
      </h2>
      <v-alert type="warning">
        Cette section est en attente du contenu nécessaire.
      </v-alert>

      <Equipe :members="members" />
    </v-container>

    <v-parallax src="img/mare.jpg" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { members } = await $content('equipe').fetch()
    return { members }
  },
}
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
* {
  margin: 5vh auto;
}
</style>
