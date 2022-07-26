import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faQuestion,
  faBriefcase,
  faFilePen,
  faClock,
  faEnvelope,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faVk,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faQuestion,
  faBriefcase,
  faFilePen,
  faHouseChimney,
  faClock,
  faEnvelope
);
library.add(faTwitter, faVk, faInstagram, faLinkedinIn);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
