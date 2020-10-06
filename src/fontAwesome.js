
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane, faSun, faTimes, faShip, faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const registerFontAwesomeIcons = () => {
  library.add(faPaperPlane, faSun, faTimes, faShip, faUtensils);
};
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default registerFontAwesomeIcons;
