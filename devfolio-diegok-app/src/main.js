import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import messages from "./i18n/locales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Crear instancia de i18n
const i18n = createI18n({
	locale: "es", // Idioma por defecto: español
	fallbackLocale: "en", // Idioma de respaldo
	messages,
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
