// DOMContentLoaded makes sure everything in the DOM is loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {
    const heroTextEl = document.querySelectorAll('.changingTextContainer .changingText');
    const scrollIndicator = document.querySelector('.scrollIndicator');
    const burgerMenu = document.querySelector('#burgerMenu');
    const sideMenu = document.querySelector('#sideMenu');
    const closeMenu = document.querySelector('#closeMenu');
    const changeTextEl = document.querySelector('.changingTextContainer');
    const navLinks = document.querySelectorAll('.topnav a, .topnavMobile  a ');


    // Get the current URLs' pathname without the domainname 
    const currentPath = window.location.pathname;
    let currentIndex = 0;

    if (changeTextEl) {
        // Call changeText function every 8th second
        setInterval(changeText, 6000);
    }

    // Loop through each link and add .active to the matching link(s)
    navLinks.forEach(link => {
        // Skip links with href="#"
        if (link.getAttribute('href') === '#') {
            link.classList.remove('active');
            return;
        }
        // Check if the pathname matches the current pathname
        if (link.pathname === currentPath) {
            link.classList.add('active');
        } else {
            //Remove if it doesn't match
            link.classList.remove('active');
        }
    });


    // Changes text on landingpage hero over time
    function changeText() {
        // Removes the active-class from the current text
        heroTextEl[currentIndex].classList.remove('active');
        heroTextEl[currentIndex].classList.add('hidden');

        setTimeout(() => {
            heroTextEl[currentIndex].classList.remove('hidden');
            // Updates the currentIndex to point at the next text.
            currentIndex = (currentIndex + 1) % heroTextEl.length;
            // Adds the active-class from the next text
            heroTextEl[currentIndex].classList.add('active');
        }, 1000)
    }

    if (scrollIndicator) {
        // Hide scrollIndicator when scrolled down
        window.addEventListener('scroll', () => {
            // Checks, is scrollY is above 200px
            if (window.scrollY > 200) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        });

        // Adds click event for scrollIndicator
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({
                top: 600, // Moves 700px down
                left: 0,
                behavior: 'smooth' // Makes scroll smooth
            });
        });
    }

    // Open side-menu
    burgerMenu.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    // Close side-menu
    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });

    // CLose side-menu when clicking outside of the menu
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
            sideMenu.classList.remove('open');
        }
    });


    const logoLink = document.querySelector("a.logo");
    const logoImage = logoLink.querySelector("img");

    logoLink.addEventListener("click", (e) => {
        e.preventDefault(); // Forhindr øjeblikkelig navigation

        document.body.classList.add("no-scroll");
        // Tilføj 'expand' klasse til både link og billede
        logoLink.classList.add("expand");
        logoImage.classList.add("expand");

        // Vent på animationens afslutning, før vi navigerer
        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            window.location.href = logoLink.href; // Naviger til forsiden
        }, 1000); // Matcher transitionens længste varighed
    });
});