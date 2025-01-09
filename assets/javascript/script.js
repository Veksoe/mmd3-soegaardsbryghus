// DOMContentLoaded makes sure everything in the DOM is loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {
    const heroTextEl = document.querySelectorAll('.changingTextContainer .changingText');
    const scrollIndicatorEl = document.querySelector('.scrollIndicator');
    const burgerMenuEl = document.querySelector('#burgerMenu');
    const sideMenuEl = document.querySelector('#sideMenu');
    const closeMenuEl = document.querySelector('#closeMenu');
    const changeTextEl = document.querySelector('.changingTextContainer');
    const navLinksEl = document.querySelectorAll('.topnav a, .topnavMobile  a ');
    const logoLinkEl = document.querySelector("a.logo");
    const logoImageEl = logoLinkEl.querySelector("img");


    // Get the current URLs' pathname without the domainname 
    const currentPath = window.location.pathname;
    let currentIndex = 0;


    // ----- NAVIGATION  ----- //
    // Loop through each link and add .active to the matching link(s)
    navLinksEl.forEach(link => {
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

    // Open side-menu
    burgerMenuEl.addEventListener('click', () => {
        sideMenuEl.classList.add('open');
    });

    // Close side-menu
    closeMenuEl.addEventListener('click', () => {
        sideMenuEl.classList.remove('open');
    });

    // CLose side-menu when clicking outside of the menu
    document.addEventListener('click', (e) => {
        if (!sideMenuEl.contains(e.target) && !burgerMenuEl.contains(e.target)) {
            sideMenuEl.classList.remove('open');
        }
    });

    logoLinkEl.addEventListener("click", (e) => {
        e.preventDefault(); // Prevents reload/navigation/event

        // Add no-scoll class to prevent side scroll
        document.body.classList.add("no-scroll");
        logoLinkEl.classList.add("expand");
        logoImageEl.classList.add("expand");

        // Wait for the animation to end, before navigation to link
        setTimeout(() => {
            // Remove no-scoll class to see all content in body
            document.body.classList.remove("no-scroll");
            // Navigate to landingpage
            window.location.href = logoLinkEl.href;
        }, 1000); // Match the lenght of the transition.
    });

    // ----- HERO  ----- //
    if (changeTextEl) {
        // Call changeText function every 8th second
        setInterval(changeText, 6000);
    }
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
    if (scrollIndicatorEl) {
        // Hide scrollIndicatorEl when scrolled down
        window.addEventListener('scroll', () => {
            // Checks, if scrollY is above 200px
            if (window.scrollY > 200) {
                scrollIndicatorEl.classList.add('hidden');
            } else {
                scrollIndicatorEl.classList.remove('hidden');
            }
        });

        // Adds click event for scrollIndicatorEl
        scrollIndicatorEl.addEventListener('click', () => {
            window.scrollBy({
                top: 600, // Moves 600px down
                left: 0,
                behavior: 'smooth' // Makes scroll smooth
            });
        });
    }


    // ----- ØLSMAGNINGS PAKKER  ----- //
    document.querySelectorAll('.olsmagspakker .btnContainer button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all classes when btn is clicked
            document.querySelectorAll('.olsmagspakker .btnContainer button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Adds active to clicked btn
            button.classList.add('active');

            // Find  the visible article
            const visibleArticle = document.querySelector('.article-content.active');
            const targetClass = button.getAttribute('data-target');
            const targetArticle = document.querySelector(`.${targetClass}`);

            // Get previous shown article
            if (visibleArticle !== targetArticle) {
                if (visibleArticle) {
                    // Reset classes
                    visibleArticle.classList.remove('active', 'appearing', 'disappearing');
                    // Add disappearing class
                    visibleArticle.classList.add('disappearing');
                    // Listen for the animation to end
                    visibleArticle.addEventListener('animationend', function handleDisappear() {
                        visibleArticle.classList.remove('disappearing');
                        // Reset styles so animations will play correctly later
                        visibleArticle.style.opacity = '0';
                        visibleArticle.style.transform = 'scale(0)';
                        // Remove the event listener
                        visibleArticle.removeEventListener('animationend', handleDisappear);
                    });
                }

                setTimeout(() => { // Show the selcted article by making it invisble but in the flow
                    targetArticle.style.opacity = '0';
                    targetArticle.style.transform = 'scale(0)';
                    targetArticle.style.display = 'block';

                    targetArticle.classList.add('appearing');
                    // Listen for the animation to end
                    targetArticle.addEventListener('animationend', function handleAppear() {
                        targetArticle.classList.remove('appearing');
                        targetArticle.classList.add('active');
                        // Reset styles so animations will play correctly later
                        targetArticle.style.opacity = '1';
                        targetArticle.style.transform = 'scale(1)';
                        // Remove the event listener
                        targetArticle.removeEventListener('animationend', handleAppear);
                    });
                }, 200)
            }
        });
    });



});