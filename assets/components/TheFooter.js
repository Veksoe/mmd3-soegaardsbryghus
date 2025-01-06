// Define the Footer-component

const TheFooter = {
    template: `
    <footer>
            <div class="imgContainer">
                <img src="./assets/img/footer/people-toasting-footer.jpg"
                    alt="Gæster på Søgaards Bryg der skål med øl.">
                <img src="./assets/img/footer/smiling-youngsters-footer.jpg"
                    alt="Unge gæster på Søgaards Bryghus der har det sjovt.">
                <img src="./assets/img/footer/women-at-cakes-footer.jpg"
                    alt="To kvinder der kigger på kager i Søgaards Bryghus.">
                <img src="./assets/img/footer/old-women-eating-footer.jpg"
                    alt="Ældre dame der spiser hos Søgaards Bryghus.">
            </div>
            <div class="contentContainer">
                <div class="openingHours">
                    <h2>Åbningstider</h2>
                    <h3>Fru. Søgaard</h3>
                    <div>
                        <p>Mandag-lørdag</p>
                        <p>09:00-18:00</p>
                    </div>
                    <p>Køkkenet lukker 30 min. før</p>
                    <h3>Hr. Søgaard</h3>
                    <div>
                        <p>Mandag-torsdag</p>
                        <p>10:00-23:00</p>
                    </div>
                    <p>Køkkenet lukker 60 min. før</p>
                    <div>
                        <p>Fredag-lørdag</p>
                        <p>10:00-sent</p>
                    </div>
                </div>
                <div class="links">
                    <a href="index.html" class="logo"><img src="./assets/img/SB_logo_grøn.png" alt=""></a>
                    <a href="#">Vilkår</a>
                    <a href="#">Kontrolrapporter</a>
                    <a href="#">Cookies</a>
                </div>
                <div class="contact">
                    <h2>Kontakt</h2>
                    <div class="adress">
                        <i class="fa-solid fa-house"></i>
                        <div>
                            <p>C. W. Obels Plads 1A</p>
                            <p>9000 Aalborg, Denmark</p>
                        </div>

                    </div>
                    <div class="phone"> <i class="fa-solid fa-phone"></i><a href="tel:98161114">+45 98 16 11 14</a>
                    </div>
                    <div class="email"><i class="fa-solid fa-envelope"></i><a
                            href="mailto:mail@soegaardsbryghus.dk">mail@soegaardsbryghus.dk</a></div>
                    <div class="social">
                        <a href="https://www.facebook.com/soegaardsbryghus"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/frusogaard_9000/" class="fruInsta"><i
                                class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.instagram.com/hr.soegaard/" class="hrInsta"><i
                                class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <p class="copyright">&copy; Annika Jensen og Neepa Parameswaran, 2025</p>
        </footer>
    `
};

export { TheFooter };