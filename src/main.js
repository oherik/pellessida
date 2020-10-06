import Vue from "vue";

import "./assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane, faSun, faTimes, faShip, faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueMeta from "vue-meta";
import App from "./App.vue";

library.add(faPaperPlane, faSun, faTimes, faShip, faUtensils);

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
