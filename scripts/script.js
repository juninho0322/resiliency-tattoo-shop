// alert(`testing`);



var lightbox = new PhotoSwipeLightbox({
    gallery: '.test-gallery',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});

lightbox.init();

document.querySelector("#button-book").addEventListener("click", function () {
    alert(`test`);
    console.log(`test`);
});


// function click and touch menu-burger activate
var burgerButton = document.querySelector("#burger");
var burgerMenu = document.getElementById("burger-menu");

function toggleBurgerMenu() {
    // Toggle visibility
    if (burgerMenu.style.visibility === "visible") {
        burgerMenu.style.visibility = "hidden";
        // Enable scrolling
        document.body.style.overflow = "auto";
    } else {
        burgerMenu.style.visibility = "visible";
        // Disable scrolling
        document.body.style.overflow = "hidden";
    }

}

// Click event
burgerButton.addEventListener("click", toggleBurgerMenu);

// Touch event
burgerButton.addEventListener("touchstart", toggleBurgerMenu);