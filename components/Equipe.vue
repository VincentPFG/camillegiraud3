<template>
  <v-card>
    <v-window show-arrows>
      <v-window-item v-for="n in 3" :key="n">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-row justify="center">
                <v-avatar class="grey" size="33vw">
                  <v-icon size="20vw">
                    mdi-account
                  </v-icon>
                </v-avatar>
              </v-row>
            </v-col>
            <v-col cols="12" md="6">
              <v-card flat color="transparent">
                <v-card-title>Prénom NOM</v-card-title>
                <v-card-subtitle>Poste</v-card-subtitle>
                <v-card-text
                  class="text-justify"
                  v-text="$lorem.generateParagraphs(2)"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const equipe = await $content('equipe').fetch()
    return { equipe }
  },
}
</script>
