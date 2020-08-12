<template>
  <!-- <v-card>
    <v-carousel :light="!$vuetify.theme.dark" hide-delimiter-background>
      <v-carousel-item
        v-for="{ avatar, name, post, description } in members"
        :key="name"
      >
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
      </v-carousel-item>
    </v-carousel>
  </v-card> -->

  <v-row>
    <v-col
      v-for="{ avatar, name, post, description } in members"
      :key="name"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <v-img contain height="40vh" :src="avatar" />

        <v-card-title>{{ name }}</v-card-title>
        <v-card-subtitle>{{ post }}</v-card-subtitle>
        <v-card-text class="text-justify">
          {{ description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    members: { type: Array, required: true },
  },
}
</script>
