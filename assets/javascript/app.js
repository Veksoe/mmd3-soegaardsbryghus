import { Navigation } from '../components/TheHeader.js'; // Importer Navbar-komponenten
import { Btn } from '../components/BasicBtn.js'; // Importer Btn-komponenten
import { TheFooter } from '../components/TheFooter.js'; // Importer Footer-komponenten

// Opret Vue-applikationen og registrer komponenterne
Vue.createApp({
    components: {
        Navigation, // Registrer Navbar-komponenten
        Btn, // Registrer Btn-komponenten
        TheFooter // Registrer Sooter-komponenten
    }
}).mount("#app");


