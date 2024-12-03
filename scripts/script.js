// alert(`testing`);

/*
  this need to be actived when the email server works
*/

// document
//   .getElementById("form-email")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     document.getElementById("submit-button").disabled = true; // Disable the submit button

//     // Optionally, add your own form submission logic if needed:
//     this.submit(); // Only submit once
//   });

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
/* temp alert box till email serve get worked
 */
// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("submit-button")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       alert(
//         "Sorry this form is in progress... send an email to:.info@resiliencytattoo.co.uk "
//       );
//     });
// });

// email form js
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("form-email")
    .addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Disable the submit button
      document.getElementById("submit-button").disabled = true;

      console.log(event.target);
      // Collect the form data
      const formData = new FormData(event.target);
      console.log(formData);
      try {
        // Send the form data via fetch to the server
        const response = await fetch("http://153.92.208.179/contact", {
          method: "POST",
          body: formData,
        });
        console.log(response);

        if (!response.ok) {
          // If the response is not OK (e.g., 400 or 500 status code)
          const errorResult = await response.json();
          console.log(errorResult);
          alert("Error sending email: " + errorResult.error);
          return;
        }

        // Show a success message
        alert("Email sent sucessfully.");
      } catch (error) {
        console.error("Error:", error);

        alert("Error");
      } finally {
        // Re-enable the submit button
        document.getElementById("submit-button").disabled = false;
        document.getElementById("form-email").reset();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
});
