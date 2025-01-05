// Definer Navbar-komponenten

const landingpage = "/";
const fruSoegaard = "/frusoegaard.html"
const hrSoegaard = "/hrsoegaard.html"
const Navigation = {
    template: `
      <nav>
        <ul>
          <li><a href="${landingpage}">Forside</a></li>
          <li><a href="${fruSoegaard}">Fru. Søgaard</a></li>
          <li><a href="${hrSoegaard}">Hr. Søgaard</a></li>
        </ul>
      </nav>
    `
};


export { Navigation };