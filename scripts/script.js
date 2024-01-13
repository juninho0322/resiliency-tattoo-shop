// alert(`testing`);



var lightbox = new PhotoSwipeLightbox({
    gallery: '.studio-gallery',
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
    burgerMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("noscroll");

}

// Click event
burgerButton.addEventListener("click", toggleBurgerMenu);

document.querySelectorAll(".js-close").forEach(function (itemMenu) {
    itemMenu.addEventListener("click", toggleBurgerMenu);

});

console.log(document.querySelectorAll(".js-close"));







