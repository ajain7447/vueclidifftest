<template>
  <v-card>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <DefaultImg :src="mediaDefault" :lazy="lazy" />
        </v-flex>
        <v-flex xs12>
          <v-alert
            outline
            :value="true"
            color="error"
            icon="error"
            class="mt-3"
          >
            No logramos encontrar el portal que estás visitando
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import DefaultImg from "./DefaultImg";
export default {
  name: "PortalError",
  props: ["mediaDefault", "lazy"],
  components: {
    DefaultImg
  }
};
</script>
