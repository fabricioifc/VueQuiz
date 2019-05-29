import "./database";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});