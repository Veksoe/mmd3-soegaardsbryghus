// Definer Navbar-komponenten
const baseUrl = "mmd3-soegaardsbryghus" // update before upload, maybe
const landingpage = "/";
const fruSoegaard = "/frusoegaard.html"
const hrSoegaard = "/hrsoegaard.html"
const Navigation = {
    template: `
      <nav>
        <ul>
          <li><a href="${baseUrl + landingpage}">Forside</a></li>
          <li><a href="${baseUrl + fruSoegaard}">Fru. Søgaard</a></li>
          <li><a href="${baseUrl + hrSoegaard}">Hr. Søgaard</a></li>
        </ul>
      </nav>
    `
};


export { Navigation };