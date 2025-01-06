// DOMContentLoaded makes sure everything in the DOM is loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {
    const heroTextEl = document.querySelectorAll('.changingTextContainer .changingText');
    const scrollIndicator = document.querySelector('.scrollIndicator');

    let currentIndex = 0;

    // Call changeText function every 8th second
    setInterval(changeText, 6000);


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
            top: 700, // Moves 700px down
            left: 0,
            behavior: 'smooth' // Makes scroll smooth
        });
    });


});