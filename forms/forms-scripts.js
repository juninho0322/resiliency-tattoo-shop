document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to all toggle checkboxes
  document.querySelectorAll(".toggle-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const targetId = event.target.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (event.target.checked) {
        targetElement.classList.remove("hidden");
      } else {
        targetElement.classList.add("hidden");
      }
    });
  });
});
