import { Navigation } from '../components/TheHeader.js'; // Importer Navbar-komponenten
import { Btn } from '../components/BasicBtn.js'; // Importer Btn-komponenten

// Opret Vue-applikationen og registrer komponenterne
Vue.createApp({
    components: {
        Navigation, // Registrer Navbar-komponenten
        Btn // Registrer Btn-komponenten
    }
}).mount("#app");
