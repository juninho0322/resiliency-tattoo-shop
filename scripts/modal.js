// "use strict";

// const modal = document.querySelector(".modal-sections");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function (modal) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
};

const closeModal = function (modal) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // Reset overflow to allow scrolling
};

// Attach click event to all buttons with 'show-modal' class
btnOpenModal.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const modalSelector = `#${trigger.getAttribute("data-target")}`; // Get modal selector from data-target
    const modal = document.querySelector(modalSelector); // Select the corresponding modal
    openModal(modal); // Open the selected modal
  });
});

// Attach click event to all buttons with 'close-modal' class
btnCloseModal.forEach((button) => {
  button.addEventListener("click", function () {
    const modalSelector = `#${button.getAttribute("data-target")}`; // Get the target modal selector
    if (modalSelector) {
      const modal = document.querySelector(modalSelector); // Find the modal
      if (modal) closeModal(modal); // Close it if found
    }
  });
});

// Close modal when overlay is clicked
overlay.addEventListener("click", function () {
  const openModal = document.querySelector(".modal-sections:not(.hidden)"); // Find the currently open modal
  if (openModal) closeModal(openModal); // Close it if found
});

// Close modal when 'Escape' key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal-sections:not(.hidden)"); // Find the currently open modal
    if (openModal) closeModal(openModal); // Close it if found
  }
});
