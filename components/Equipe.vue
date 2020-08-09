<template>
  <v-card>
    <v-window show-arrows-on-hover>
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
</template>

<script>
export default {
  props: {
    members: { type: Array, required: true },
  },
}
</script>
