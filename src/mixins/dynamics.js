export default {
  methods: {
    darkCheck(color) {
      const hexColor = color.replace("#", "");
      const red = parseInt(hexColor.substr(0, 2), 16);
      const green = parseInt(hexColor.substr(2, 2), 16);
      const blue = parseInt(hexColor.substr(4, 2), 16);
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
      return !(brightness > 155);
    },
    blockButtonCheck(value) {
      return value === "block";
    },
    buttonTextHandler(showBtn, buttonText, counterInit) {
      return showBtn ? buttonText : counterInit;
    },
    // mediaHandler(media) {
    //   return media.length ? media : this.mediaDefault;
    // },
  },
  computed: {
    // mediaDefault() {
    //   return require("../assets/Logos/logoCW.png");
    // },
    // lazy() {
    //   return require("../assets/Logos/logoCW.png");
    // }
  }
};
