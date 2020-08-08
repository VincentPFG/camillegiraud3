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

    <v-window show-arrows>
      <h1>test</h1>
      <v-window-item
        v-for="{ name, post, description, image } in members"
        :key="name"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-row justify="center">
                <v-avatar class="grey" size="33vw">
                  <v-img :src="image" />
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
    <p>{{ members }} {{ foo }} {{ test }}</p>
  </v-card>
</template>

<script>
export default {
  // page only!
  asyncData({ $content }) {
    // const { members } = await $content('equipe').fetch()
    return { test: 'coucou' }
  },
  data() {
    return { foo: 'bar' }
  },
  async mounted() {
    const { members } = await this.$content('equipe').fetch()
    for (const member of members) {
      console.log(member)
    }
    console.log(members)
  },
}
</script>
