<template>

  <v-row>
    <v-col
      v-for="{ avatar, name, post, description } in members"
      :key="name"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <!-- <v-img contain height="40vh" :src="avatar" /> -->

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
