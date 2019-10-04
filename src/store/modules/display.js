const namespaced = true;

const state = {
  backgroundColor: "",
  buttonCircular: false,
  buttonColor: "",
  buttonDelay: 0,
  buttonOutline: false,
  buttonStyle: "",
  buttonText: "",
  buttonType: "",
  layout: "",
  title: "",
  media: "",
  counterInit: null,
  showBtn: false
};

const mutations = {
  setDisplay(state, payload) {
    state.backgroundColor = payload.backgroundColor;
    state.buttonCircular = payload.buttonCircular;
    state.buttonColor = payload.buttonColor;
    state.buttonDelay = payload.buttonDelay;
    state.buttonOutline = payload.buttonOutline;
    state.buttonStyle = payload.buttonStyle;
    state.buttonText = payload.buttonText;
    state.buttonType = payload.buttonType;
    state.layout = payload.layout;
    state.title = payload.title;
  },
  setMedia(state, payload) {
    state.media = payload;
  },
  setCounterInit(state, payload) {
    state.counterInit = payload;
  },
  counterInitMinusOne(state) {
    state.counterInit = state.counterInit - 1;
  },
  setShowBtn(state, payload) {
    state.showBtn = payload;
  },
  resetModule(state) {
    state.backgroundColor = "";
    state.buttonCircular = false;
    state.buttonColor = "";
    state.buttonDelay = 0;
    state.buttonOutline = false;
    state.buttonStyle = "";
    state.buttonText = "";
    state.buttonType = "";
    state.layout = "";
    state.title = "";
    state.media = "";
    state.counterInit = null;
    state.showBtn = false;
  }
};

const getters = {};

const actions = {};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
