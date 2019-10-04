<template>
  <v-flex xs12>
    <div class="text-xs-center">
      <v-btn
        :disabled="!showBtn"
        :block="blockButtonCheck(buttonStyle)"
        :round="buttonCircular"
        :outline="buttonOutline"
        :color="buttonColor"
        :dark="darkCheck(buttonColor)"
      >
        {{ buttonTextHandler(showBtn, buttonText, counterInit) }}
      </v-btn>
    </div>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";
import dynamicsMixin from "../mixins/dynamics";
export default {
  name: "DisplayActions",
  mixins: [dynamicsMixin],
  computed: {
    ...mapState("Display", [
      "counterInit",
      "showBtn",
      "buttonStyle",
      "buttonCircular",
      "buttonOutline",
      "buttonColor",
      "buttonText"
    ])
  }
};
</script>
