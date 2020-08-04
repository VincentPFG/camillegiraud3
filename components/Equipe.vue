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
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>
