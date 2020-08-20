<template>
  <div>
    <v-parallax :src="imgs[0]">
      <h1 class="text-h2">
        Camille GIRAUD
      </h1>
      <h1 class="text-h2 font-italic font-weight-thin">
        Entretien Espaces Verts
      </h1>
    </v-parallax>

    <v-container id="contact">
      <h2 class="text-h3">
        Nous contacter
      </h2>
      <Contact />
    </v-container>

    <v-parallax :src="imgs[1]" />

    <v-container id="equipe">
      <h2 class="text-h3">
        Notre équipe
      </h2>

      <v-alert v-if="!members.length" type="warning">
        Cette section est en attente du contenu nécessaire.
      </v-alert>

      <Equipe :members="members" />
    </v-container>

    <v-parallax :src="imgs[2]" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { members } = await $content('equipe').fetch()
    return { members }
  },
  data() {
    return {
      imgs: ['devanture', 'jardin', 'mare'].map((img) => `webp/${img}.webp`),
    }
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
