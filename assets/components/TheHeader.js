// Define the Navbar-component
const landingpage = "index.html";
const fruSoegaard = "frusoegaard.html"
const hrSoegaard = "hrsoegaard.html"
const selskaber = "selskaber.html"
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
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Bryghuset</a>
                        <a href="${fruSoegaard}">Fru. Søgaard</a>
                        <a href="${hrSoegaard}">Hr. Søgaard</a>
                    </div>
                </div>
                <a href="#news">Menukort</a>
                <div class="dropdown">
                    <button class="dropbtn">Arrangementer
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${selskaber}">Selvskaber</a>
                        <a href="#">Hele Svineriet</a>
                        <a href="#">Ølsmagning</a>
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
        </header>
    `
};

export { Navigation };