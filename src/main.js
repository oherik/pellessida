import Vue from "vue";

import "./assets/css/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueMeta from "vue-meta";
import App from "./App.vue";
import registerFontAwesomeIcons from "./fontAwesome";

registerFontAwesomeIcons();

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueMeta);

const VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

const root = new Vue({
  mounted() {
    // Needed for renderAfterDocumentEvent.
    document.dispatchEvent(new Event("x-app-rendered"));
  },
  render: h => h(App),
});


document.addEventListener("DOMContentLoaded", () => {
  root.$mount("#app");
});
