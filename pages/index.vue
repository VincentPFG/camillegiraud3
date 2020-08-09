<template>
  <Spacer>
    <v-parallax src="img/devanture.jpg">
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

    <v-parallax src="img/jardin.jpg" />

    <v-container id="equipe">
      <Spacer>
        <h2 class="text-h3">
          Notre équipe
        </h2>
        <v-alert type="warning">
          Cette section est en attente du contenu nécessaire.
        </v-alert>
        <Equipe :members="members" />
      </Spacer>
    </v-container>

    <v-parallax src="img/mare.jpg" />
    <p>{{ members }}</p>
  </Spacer>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { members } = await $content('equipe').fetch()
    console.log(members)
    return { members }
  },
}
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
</style>
