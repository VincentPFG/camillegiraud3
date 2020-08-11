<template>
  <div>
    <v-form v-show="false" netlify name="contact">
      <textarea name="contenu" />
    </v-form>
    <v-form ref="form" @submit.prevent="onSubmit">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="civil"
              outlined
              :items="civilItems"
              label="Civilité"
            />
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="name"
              outlined
              label="Nom"
              :rules="rules.name"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone"
              outlined
              type="tel"
              label="Téléphone"
              :rules="rules.phone"
              prepend-icon="mdi-cellphone"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              outlined
              type="email"
              label="Mail"
              :rules="rules.email"
              prepend-icon="mdi-email"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-textarea
              v-model="address"
              outlined
              label="Adresse"
              prepend-icon="mdi-map-marker"
              :rules="rules.name"
            />
          </v-col>
        </v-row>
        <v-textarea
          v-model="message"
          outlined
          label="Message"
          prepend-icon="mdi-pen"
          :rules="rules.name"
        />
        <v-row justify="center">
          <v-btn type="submit" color="primary">
            <v-icon class="mr-2">
              mdi-send
            </v-icon>
            Envoyer
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
    <!-- <v-snackbar v-model="successSB" color="success" :timeout="-1">
      Formulaire envoyé
      <v-btn icon="icon" @click="successSB = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="errorSB" color="error" :timeout="-1">
      Une erreur est survenue
      <v-btn icon="icon" @click="arrorSB = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar> -->
    <v-snackbar
      v-model="snackbar"
      :color="failed ? 'error' : 'success'"
      :timeout="-1"
    >
      {{ failed ? 'Une erreur est survenue' : 'Formulaire envoyé' }}
      <template #action>
        <v-btn icon @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
const encode = (data) =>
  Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
const requis = (v) => !!v || 'Requis'
export default {
  data() {
    return {
      message: '',
      email: '',
      phone: '',
      address: '',
      name: '',
      civil: '',
      // dialog: false,
      civilItems: ['Madame', 'Monsieur'],
      rules: {
        name: [requis],
        email: [
          (v) => !v || /.+@.+\..+/.test(v) || 'Le format semble invalide',
        ],
        phone: [
          requis,
          (v) =>
            !v ||
            /(^((\+|00)33|0)\d{9}$|^((\+|00 ?)33 |0)\d( \d{2}){4}$)/.test(v) ||
            'Le format semble invalide',
        ],
      },
      // successSB: false,
      // errorSB: false,
      snackbar: false,
      failed: null,
    }
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.validate()) {
        // fetch('/', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   body: encode({
        //     'form-name': 'contact',
        //     contenu: `

        //         ${this.civil} ${this.name}

        //         ${this.phone}   ${this.email}

        //         ${this.address}

        //         ${this.message}
        //     `,
        //   }),
        // })
        //   .then(() => {
        //     // this.dialog = false
        //     this.$refs.form.reset()
        //     // this.successSB = true
        //     this.failed = false
        //     this.snackbar = true
        //   })
        //   .catch(() => {
        //     // this.dialog = false
        //     // this.errorSB = true
        //     this.failed = true
        //     this.snackbar = true
        //   })

        try {
          await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode({
              'form-name': 'contact',
              contenu: `

                ${this.civil} ${this.name}

                ${this.phone}   ${this.email}

                ${this.address}

                ${this.message}
            `,
            }),
          })

          this.$refs.form.reset()
          this.failed = false
          this.snackbar = true
        } catch {
          this.failed = true
          this.snackbar = true
        }
      }
    },
  },
}
</script>
