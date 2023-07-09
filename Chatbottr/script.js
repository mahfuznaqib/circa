document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel');
    const figures = carousel.querySelectorAll('figure');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');

    // Check if necessary elements exist
    if (!carousel || figures.length === 0 || !prevButton || !nextButton) {
        console.error('One or more necessary elements are missing');
        return;
    }

    let index = 0;

    // Function to show the slide at the given index
    const showSlide = (i) => {
        index = i;

        // Wrap around to the last slide if index is less than 0
        if (index < 0) {
            index = figures.length - 1;
        } 
        // Wrap around to the first slide if index is greater than or equal to the number of slides
        else if (index >= figures.length) {
            index = 0;
        }

        // Update the transform style to show the current slide
        carousel.style.transform = `translateX(${-100 * index}%)`;
    }

    // Add event listeners for the previous and next buttons
    prevButton.addEventListener('click', () => showSlide(index - 1));
    nextButton.addEventListener('click', () => showSlide(index + 1));
});
