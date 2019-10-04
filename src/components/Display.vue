<template>
  <div class="about">
    <v-container>
      <v-layout>
        <v-flex>
          <div id="parent">
            <v-card max-width="600px" class="mx-auto">
              <v-img
                class="white--text"
                height="760px"
                :src="require('../assets/plane.jpg')"
              >
                <v-container>
                  <v-layout text-xs-center wrap>
                    <v-flex px-5>
                      <div id="child">
                        <v-card flat class="transparent px-3">
                          <v-responsive class="mt-5">
                            <v-img
                              contain
                              height="150px"
                              :src="require('../assets/aiLogo.svg')"
                            ></v-img>
                          </v-responsive>
                          <v-card-text>
                            <display-button> </display-button>
                          </v-card-text>
                          <v-card-text>
                            <small>
                              Al hacer click en el botón aceptas que has leído y
                              estás de acuerdo con nuestro
                              <span class="click" @click="terms">
                                aviso de privacidad
                              </span>
                            </small>
                          </v-card-text>
                        </v-card>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <Privacy
      :dialog="termsDialog"
      :privacySpinner="privacySpinner"
      :privacy="privacy"
      :updated_at="updated_at"
    />
  </div>
</template>
<script>
import axios from "axios";
//import PortalError from "../components/PortalError";

const get = (obj, path, defaultValue = null) =>
  String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce(
      (a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue),
      obj
    );

export default {
  components: {
    // PortalError,
    Privacy: () => import("../components/PrivacyTerms"),
    DisplayButton: () => import("../components/DisplayButton")
  },
  data() {
    return {
      loading: false,
      error: false,
      dialog: false,
      privacy: "",
      updated_at: "",
      privacySpinner: false,
      timerCountdown: null,
      type: null
    };
  },
  methods: {
    getPortal() {
      this.loading = true;
      this.error = false;
      // portal?gw_id=asdfasdf&mac=2323423asdf
      axios
        .get(`portal?gw_id=${this.gw_id}&mac=${this.mac}`)
        .then(response => {
          console.log(response);
          this.type = response.data.data.type;
          const display = response.data.data.display;
          if (this.isDisplay) {
            this.$store.commit("Display/setDisplay", display);
            // this.$store.commit(
            //   "Display/setMedia",
            //   this.mediaHandler(get(response, "data.data.media[0].url", []))
            // );
            this.backgroundColor = this.$store.state.Display.backgroundColor;
            this.$store.commit(
              "Display/setCounterInit",
              this.$store.state.Display.buttonDelay
            );
            this.countDown();
          }
        })
        .catch(error => {
          console.log(error.response);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    },
    getTerms() {
      this.privacySpinner = true;
      axios
        .get(`terms?gw_id=${this.gw_id}&mac=${this.mac}`)
        .then(response => {
          console.log("terms =", response.data.data);
          this.privacy = get(response, "data.data.content", "");
          this.updated_at = get(response, "data.data.updated_at", false);
        })
        .catch(error => {
          console.log("terms =", error.response);
        })
        .finally(() => (this.privacySpinner = false));
    },
    countDown() {
      this.timerCountdown = setInterval(() => {
        this.$store.commit("Display/counterInitMinusOne");
      }, 1000);
    },
    terms() {
      this.$store.commit("setTermsDialog", true);
    }
  },
  computed: {
    gw_id() {
      return this.$route.query.gw_id;
    },
    mac() {
      return this.$route.query.mac;
    },
    isDisplay() {
      return this.type === "display";
    },
    isEmailCapture() {
      return this.type === "emailCapture";
    },
    termsDialog() {
      return this.$store.state.termsDialog;
    }
  },
  watch: {
    "$store.state.Display.counterInit"(v) {
      if (v === 0) {
        clearInterval(this.timerCountdown);
        this.$store.commit("Display/setShowBtn", true);
      }
    },
    termsDialog(v) {
      if (v) {
        return this.getTerms();
      }
    }
  },
  created() {
    this.getPortal();
  },
  destroyed() {
    clearInterval(this.timerCountdown);
  }
};
</script>
<style>
#parent {
  position: relative;
}
#child {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 52%;
  margin: auto;
  background-color: rgba(253, 248, 255, 0.8);
}

.click {
  cursor: pointer;
  text-decoration: underline;
}
</style>
