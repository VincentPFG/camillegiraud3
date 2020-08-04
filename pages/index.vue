<template>
  <Spacer>
    <h1 class="display-3">
      Entretien Espaces Verts
    </h1>
    <v-carousel>
      <v-carousel-item v-for="image in images" :key="image" :src="image" />
    </v-carousel>
    <div id="contact">
      <h2 class="display-1">
        Nous contacter
      </h2>
      <Contact />
    </div>
    <div id="equipe">
      <h2 class="display-1">
        Notre équipe
      </h2>
      <v-alert type="warning">
        Cette section est en attente du contenu nécessaire.
      </v-alert>
      <Equipe />
    </div>
  </Spacer>
</template>

<script>
export default {
  data() {
    return { images: ['devanture.jpg', 'jardin.jpg', 'mare.jpg'] }
  },
}
</script>
