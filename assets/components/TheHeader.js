// Define the Navbar-component
const landingpage = "index.html";
const fruSoegaard = "frusoegaard.html"
const hrSoegaard = "hrsoegaard.html"
const selskaber = "selskaber.html" 
const olsmagning = "olsmagning.html"
const Navigation = {
    template: `
     <header>
            <div class="headerTop">
                <div class="openIndicator">
                    <p>
                    <div></div>Åben nu</p>
                </div>
                <div class="btnContainer">
                    <a href="#" class="btn">Book Bord</a>
                    <a href="#" class="btn">Book Rundvisning</a>
                    <a href="#" class="btn">Book Selskab</a>
                </div>
            </div>
            <nav class="topnav" id="myTopnav">
                <div class="dropdown">
                    <button class="dropbtn">Søgaard
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Bryghuset</a>
                        <a href="${fruSoegaard}">Fru. Søgaard</a>
                        <a href="${hrSoegaard}">Hr. Søgaard</a>
                    </div>
                </div>
                <a href="#">Menukort</a>
                <div class="dropdown">
                    <button class="dropbtn">Arrangementer
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${selskaber}">Selskaber</a>
                        <a href="#">Hele Svineriet</a>
                        <a href="${olsmagning}">Ølsmagning</a>
                        <a href="#">Øl med hjem</a>
                    </div>
                </div>
                <a href="${landingpage}" class="logo"><img src="./assets/img/SB_logo_grøn.png"
                        alt="Søgaards Bryghus logo, af et af et grafisk ansigt med en stjerne om det ene øje og en måne om det andet."
                        ></a>
                <a href="#">Bageri</a>
                <a href="#">Bryggeri</a>
                <a href="#">Destilleri</a>
            </nav>
            <nav class="topnavMobile" id="myTopnavMmobile">
                    <a href="#" class="btn">Book Bord</a>
                    <button class="burger-menu" id="burgerMenu">
                     <i class="fa-solid fa-bars"></i>
                </button>
                <div class="side-menu" id="sideMenu">
                    <button class="close-menu" id="closeMenu">
                        <i class="fa-solid fa-times"></i>
                    </button>
                    <a href="${landingpage}" class="logo"><img src="./assets/img/SB_logo_grøn.png"
                        alt="Søgaards Bryghus logo, af et af et grafisk ansigt med en stjerne om det ene øje og en måne om det andet."
                        ></a>
                        <div class="btnContainer">
                    <a href="#" class="btn">Book Rundvisning</a>
                    <a href="#" class="btn">Book Selskab</a>
                </div>
                     <div class="dropdown">
                    <button class="dropbtn">Søgaard
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Bryghuset</a>
                        <a href="${fruSoegaard}">Fru. Søgaard</a>
                        <a href="${hrSoegaard}">Hr. Søgaard</a>
                    </div>
                </div>
                <a href="#">Menukort</a>
                <div class="dropdown">
                    <button class="dropbtn">Arrangementer
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${selskaber}">Selskaber</a>
                        <a href="#">Hele Svineriet</a>
                        <a href="${olsmagning}">Ølsmagning</a>
                        <a href="#">Øl med hjem</a>
                    </div>
                </div>
                
                <a href="#">Bageri</a>
                <a href="#">Bryggeri</a>
                <a href="#">Destilleri</a>
                </div>
            </nav>

        </header>
    `
};

export { Navigation };