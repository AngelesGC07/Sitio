

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const carouselImages = document.querySelector('.carousel-images');
    const carouselItems = document.querySelectorAll('.carousel-images img');
    const carouselWidth = document.querySelector('.carousel').clientWidth;
    const maxIndex = carouselItems.length - 1;

    function moveCarousel(direction) {
        slideIndex += direction;

        if (slideIndex > maxIndex) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = maxIndex;
        }

        carouselImages.style.transform = `translateX(-${slideIndex * carouselWidth}px)`;
    }

    function autoMoveCarousel() {
        moveCarousel(1);
        setTimeout(autoMoveCarousel, 3000); 
    }

    autoMoveCarousel();

    window.addEventListener('resize', function() {
        const newWidth = document.querySelector('.carousel').clientWidth;
        carouselImages.style.transform = `translateX(-${slideIndex * newWidth}px)`;
    });
});

function toggleDetails(element) {
    element.classList.toggle('active');
}

