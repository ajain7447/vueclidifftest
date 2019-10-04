import Vue from "vue";
import Vuex from "vuex";
import Display from "./modules/display";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Display
  },
  state: {
    termsDialog: false
  },
  mutations: {
    setTermsDialog(state, payload) {
      state.termsDialog = payload;
    }
  },
  actions: {}
});
