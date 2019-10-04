<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout text-xs-center wrap>
        <v-card class="mx-auto" max-width="600">
          <v-img :aspect-ratio="16/9" :src="require('../assets/background.jpg')"></v-img>
          <v-flex px-5 mb-2>
            <v-card-text style="position: relative;">
              <v-btn absolute color="white" fab large left top height="50px">
                <v-img :src="require('../assets/aiLogo.svg')" contain></v-img>
              </v-btn>
            </v-card-text>

            <v-card-text>
              <div
                class="font-weight-light grey--text text--darken-3 display-1 mb-2 mt-2"
              >¡Bienvenid@!</div>
              <h3
                class="title font-weight-light grey--text text--darken-3 mb-4"
              >Compártenos tus datos para recibir promociones</h3>
              <v-text-field color="green accent-4" class="grey--text" label="Nombre" required></v-text-field>
              <v-text-field
                color="green accent-4"
                class="grey--text"
                label="Correo electrónico"
                required
              ></v-text-field>
              <v-btn large dark block color="green accent-4">Conectar</v-btn>
            </v-card-text>
            <v-card-text mt-5>
              <small class="grey--text text--darken-2">
                Al hacer click en el botón aceptas que has leído y estás de acuerdo con nuestro
                Aviso de Privacidad y nuestros Términos de Servicio
              </small>
            </v-card-text>
          </v-flex>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
    })
  };
</script>

<style>
</style>
