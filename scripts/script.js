// alert(`testing`);



var lightbox = new PhotoSwipeLightbox({
    gallery: '.studio-gallery',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});

lightbox.init();


var lightbox01 = new PhotoSwipeLightbox({
    gallery: '.portfolio-01',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});

lightbox01.init();


var lightbox02 = new PhotoSwipeLightbox({
    gallery: '.portfolio-02',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});

lightbox02.init();


var lightbox03 = new PhotoSwipeLightbox({
    gallery: '.portfolio-03',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});

lightbox03.init();


// document.querySelector("#button-book").addEventListener("click", function () {
//     alert(`test`);
//     console.log(`test`);
// });


// function click menu-burger activate
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


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



