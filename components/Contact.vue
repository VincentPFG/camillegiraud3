<template>
  <v-row justify="center">
    <v-col cols="12" md="12">
      <v-expansion-panels multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Formulaire de contact
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-alert type="info">
              Ce formulaire est opérationnel.
            </v-alert>
            <Form />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Téléphone</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-title>06 70 13 08 03</v-card-title>
              <v-card-actions>
                <v-btn href="tel:+33670130803">
                  <v-icon color="primary">
                    mdi-phone >
                  </v-icon>
                  <span>appeler</span>
                </v-btn>
                <v-btn @click="doCopy('+33673120803', 'Numéro copié')">
                  <v-icon color="primary">
                    mdi-content-copy
                  </v-icon>
                  <span>copier</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Mail</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-title>camille-giraud@orange.fr</v-card-title>
              <v-card-actions>
                <v-btn href="mailto:camille-giraud@orange.fr">
                  <v-icon color="primary">
                    mdi-pen
                  </v-icon>
                  <span>écrire</span>
                </v-btn>
                <v-btn
                  @click="
                    doCopy('camille-giraud@orange.fr', 'Adresse mail copiée')
                  "
                >
                  <v-icon color="primary">
                    mdi-content-copy >
                  </v-icon>
                  <span>copier</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Adresse
            <v-icon>mdi-google-maps</v-icon>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-title>
                11 Rue des Longines <br />
                Écardenville sur Eure <br />
                27490 CLEF Vallée d'Eure
              </v-card-title>
            </v-card>
            <Maps />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-snackbar v-model="snackbar" :color="color">
          {{ text }}
        </v-snackbar>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      color: null,
      text: null,
    }
  },
  methods: {
    doCopy(toCopy, message) {
      this.$copyText(toCopy).then(
        () => {
          this.color = 'success'
          this.text = message
        },
        () => {
          this.color = 'error'
          this.text = 'Une erreur est survenue'
        }
      )
      this.snackbar = true
    },
  },
}
</script>
