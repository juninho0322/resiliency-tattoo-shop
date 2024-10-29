// alert(`testing`);

document
  .getElementById("form-email")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById("submit-button").disabled = true; // Disable the submit button

    // Optionally, add your own form submission logic if needed:
    this.submit(); // Only submit once
  });

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

function showMessage() {
  // Show a simple message
  alert("This is your message!");
}

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

// Click event burger menu
burgerButton.addEventListener("click", toggleBurgerMenu);

document.querySelectorAll(".js-close").forEach(function (itemMenu) {
  itemMenu.addEventListener("click", toggleBurgerMenu);
});

console.log(document.querySelectorAll(".js-close"));

// accordion faq section
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

//links social media

// JavaScript function that accepts a URL as a parameter
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

// email form js
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form-email")
    .addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Disable the submit button
      document.getElementById("submit-button").disabled = true;

      // Collect the form data
      const formData = new FormData(event.target);

      try {
        // Send the form data via fetch to the server
        const response = await fetch("/", {
          method: "POST",
          body: formData,
        });

        // Parse the JSON response from the server
        const result = await response.json();

        // If the email was sent successfully, show the success modal
        if (result.status === "success") {
          showSuccessModal(result.message);
        } else {
          // Handle errors if email wasn't sent successfully
          alert("Error sending email: " + result.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred.");
      } finally {
        // Re-enable the submit button
        document.getElementById("submit-button").disabled = false;
      }
    });
});

// Function to display the success modal
// function showSuccessModal(message) {
//   const modal = document.getElementById("successModal");
//   const modalMessage = document.getElementById("modalMessage");
//   modalMessage.textContent = message;
//   modal.style.display = "block";
// }

// // Function to close the modal when the close button is clicked
// function closeModal() {
//   const modal = document.getElementById("successModal");
//   modal.style.display = "none";
// }

// Ensure that closeModal function is called when a close button is clicked
// document
//   .querySelector("#modalCloseButton")
//   ?.addEventListener("click", closeModal);
