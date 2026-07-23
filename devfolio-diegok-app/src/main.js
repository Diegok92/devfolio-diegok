import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n/index.js";
import { reveal } from "./directives/reveal.js";

import "./styles/tokens.css";
import "./styles/base.css";

createApp(App).use(i18n).directive("reveal", reveal).mount("#app");
