import { createApp } from "vue";
import App from "./App.vue";
import './styles/app.css'; 
import store from "./store/index.js"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


createApp(App).use(store).mount("#app");
