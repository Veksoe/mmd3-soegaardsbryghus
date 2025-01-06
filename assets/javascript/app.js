import { Navigation } from '../components/TheHeader.js'; // Importer Navbar-komponenten
import { TheFooter } from '../components/TheFooter.js'; // Importer Footer-komponenten
import { Carousel } from '../components/Carousel.js'; // Importer Footer-komponenten

// Opret Vue-applikationen og registrer komponenterne
Vue.createApp({
    components: {
        Navigation, // Registrer Navbar-komponenten
        TheFooter, // Registrer Sooter-komponenten
        Carousel
    }
}).mount("#app");


