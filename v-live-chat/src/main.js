import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bulma
import "bulma/css/bulma.css";
// Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App)
  .use(router)
  .mount("#app");
