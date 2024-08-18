function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openCarousel(img) {
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselImage = document.getElementById('carouselImage');
    const images = img.getAttribute('data-images').split(',');
    let currentIndex = 0;

    carouselContainer.style.display = 'block';
    carouselImage.src = images[currentIndex];

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            carouselImage.src = images[index];
            currentIndex = index;
        }
    }

    window.prevImage = function() {
        showImage(currentIndex - 1);
    };

    window.nextImage = function() {
        showImage(currentIndex + 1);
    };
}

function closeCarousel() {
    document.getElementById('carouselContainer').style.display = 'none';
}