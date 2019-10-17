import Vue from 'vue';

import './assets/css/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueMeta from 'vue-meta';
import App from './App.vue';

library.add(faPaperPlane);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueMeta);

const root = new Vue({
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('x-app-rendered'));
  },
  render: h => h(App),
});


document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app');
});
