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

        <!-- <Equipe :members="members" /> -->

        <v-card>
          <v-window show-arrows show-arrows-on-hover>
            <v-window-item
              v-for="{ avatar, name, post, description } in members"
              :key="name"
            >
              <h1>{{ name }}</h1>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-row justify="center">
                      <v-avatar class="primary" size="50vmin">
                        <v-img :src="avatar" />
                      </v-avatar>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card flat color="transparent">
                      <v-card-title>{{ name }}</v-card-title>
                      <v-card-subtitle>{{ post }}</v-card-subtitle>
                      <v-card-text class="text-justify">
                        {{ description }}
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
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
