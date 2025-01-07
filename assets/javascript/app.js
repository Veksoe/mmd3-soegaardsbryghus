import { Navigation } from '../components/TheHeader.js'; // Importer Navbar-komponenten
import { TheFooter } from '../components/TheFooter.js'; // Importer Footer-komponenten
import { Carousel } from '../components/Carousel.js'; // Importer Carousel-komponenten
import { HeroComponent } from '../components/Hero.js';// Importer Hero-komponenten
import { FEPImgWithText } from '../components/FEPImageWithTextbox.js';// Importer FEP-komponenten

// Create Vue-applikation and registre the components
Vue.createApp({
    components: {
        Navigation,
        TheFooter,
        Carousel,
        HeroComponent,
        FEPImgWithText
    }
}).mount("#app");


