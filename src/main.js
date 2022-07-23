import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faQuestion, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faQuestion);
library.add(faBriefcase);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
