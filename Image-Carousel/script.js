document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://picsum.photos/seed/1/600/400",
        "https://picsum.photos/seed/2/600/400",
        "https://picsum.photos/seed/3/600/400",
        "https://picsum.photos/seed/4/600/400",
        "https://picsum.photos/seed/5/600/400"
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById("carouselImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateImage() {
        imageElement.src = images[currentIndex];
    }
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
});
