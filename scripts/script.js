// PHOTO SWIPE LIBRARY
var lightbox = new PhotoSwipeLightbox({
  gallery: ".studio-gallery",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});

lightbox.init();

var lightbox01 = new PhotoSwipeLightbox({
  gallery: ".portfolio-01",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});

lightbox01.init();

var lightbox02 = new PhotoSwipeLightbox({
  gallery: ".portfolio-02",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});

lightbox02.init();

var lightbox03 = new PhotoSwipeLightbox({
  gallery: ".portfolio-03",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});

lightbox03.init();

var lightbox04 = new PhotoSwipeLightbox({
  gallery: ".portfolio-04",
  children: "a",
  // dynamic import is not supported in UMD version
  pswpModule: PhotoSwipe,
});

lightbox04.init();

// function click menu-burger activate
var burgerButton = document.querySelector("#burger");
var burgerMenu = document.getElementById("burger-menu");

// Toggle visibility
function toggleBurgerMenu() {
  burgerMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("noscroll");
}

// Click event burger menu
burgerButton.addEventListener("click", toggleBurgerMenu);

document.querySelectorAll(".js-close").forEach(function (itemMenu) {
  itemMenu.addEventListener("click", toggleBurgerMenu);
});

// Accordion faq section
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
   to highlight the button that controls the panel */

    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// JavaScript function that accepts a URL as a parameter
// redirect the social media links opening a new tab
function redirectToPage(url) {
  window.open(url, "_blank"); // Opens the link in a new tab
}

// Function to apply hover effect
function hoverEffect(img) {
  img.style.transform = "scale(1.1)"; // Scales up the image on hover
  img.style.transition = "transform 0.3s"; // Smooth transition effect
}

// Function to remove hover effect
function removeHoverEffect(img) {
  img.style.transform = "scale(1)"; // Scales back the image when hover ends
}

// JavaScript function to open email client
function openEmail() {
  const email = "info@resiliencytattoo.co.uk"; // Replace with the recipient's email
  const subject = "Contact from Resilency Web-Site!"; // Replace with the desired subject
  const body = "Hi, I would like to get in touch."; // Replace with the desired message body

  // Construct the mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the mailto link
  window.location.href = mailtoLink;
}

// document.getElementById("submit-button").addEventListener("click", function () {
//   const emailAddress = "info@resiliencytattoo.co.uk"; // Replace with your email
//   alert(`Form in progress, please send an email to: ${emailAddress}`);
// });

// email form js
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form-email")
    .addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Disable the submit button
      document.getElementById("submit-button").disabled = true;
      document.getElementById("submit-button").textContent = "Sending...";

      // Collect the form data
      const formData = new FormData(event.target);

      try {
        // Send the form data via fetch to the server
        const response = await fetch("http://153.92.208.179/contact", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          // If the response is not OK (e.g., 400 or 500 status code)
          const errorResult = await response.json();
          S;
          alert("Error sending email: " + errorResult.error);
          return;
        }
        // Email submission successful
        document.getElementById("submit-button").textContent = "Sending...";
        setTimeout(() => {}, 2000);

        // After email sent successfully, open the email modal
        const emailModal = document.getElementById("email-modal");
        const emailOverlay = document.getElementById("overlay-email");
        const btnEmailClose = document.getElementById("email-button-modal");
        const bookDiv = document.getElementById("book");

        emailModal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        emailOverlay.classList.remove("hidden");

        // when the email-modal is closed the below removes the overlay whether by pressing ESC or clicking the button X (close)
        function removeOverlay(event) {
          if (event.type === "click") {
            emailOverlay.classList.add("hidden");
            emailModal.classList.add("hidden");
            document.body.style.overflow = ""; // Prevent background scrolling
          }
          if (event.type === "keydown" && event.key === "Escape") {
            emailOverlay.classList.add("hidden");
          }
        }

        btnEmailClose.addEventListener("click", removeOverlay);
        document.addEventListener("keydown", removeOverlay);
        emailOverlay.addEventListener("click", removeOverlay);

        // scroll the page to the top of the div, making sure the modal will be visible to be closed.
        bookDiv.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } catch (error) {
      } finally {
        // Re-enable the submit button

        document.getElementById("submit-button").disabled = false;
        document.getElementById("submit-button").textContent = "Submit";
        document.getElementById("form-email").reset();
      }
    });
});
