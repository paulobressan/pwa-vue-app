import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { inicializarFirebase } from "./push-notification";
import "popper.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;
inicializarFirebase();

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
