<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-3" primary-title>
          Aviso de privacidad
          <v-spacer></v-spacer>
          <v-btn
            flat
            icon
            color="primary"
            class="icon-align-top"
            outline
            dark
            small
            @click="closePrivacyTerms"
          >
            <v-icon small>close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="privacySpinner" class="text-xs-center mt-3 mb-3">
          <v-progress-circular
            indeterminate
            color="grey lighten-1"
            :width="2"
            :size="60"
          ></v-progress-circular>
        </div>
        <div v-else>
          <v-card-text v-html="privacy"> </v-card-text>
          <v-card-text v-if="updated_at">
            <small>Actualizado el {{ updated_at }}</small>
          </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="closePrivacyTerms">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PrivacyTerms",
  props: ["dialog", "privacySpinner", "privacy", "updated_at"],
  methods: {
    closePrivacyTerms() {
      this.$store.commit("setTermsDialog", false);
    }
  }
};
</script>
