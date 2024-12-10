document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to all toggle checkboxes
  document.querySelectorAll(".toggle-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const targetId = event.target.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (event.target.checked) {
        targetElement.classList.remove("hidden");
        // If the target element contains an input, ensure it has the 'required' attribute
        targetElement.querySelectorAll("input").forEach((input) => {
          input.setAttribute("required", true);
        });
      } else {
        targetElement.classList.add("hidden");
        // Remove the 'required' attribute from hidden inputs
        targetElement.querySelectorAll("input").forEach((input) => {
          input.removeAttribute("required");
        });
      }
    });
  });
});

// JavaScript to populate the current day and date
function updateCurrentDayDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date(); // Get the current date and time
  const currentDay = daysOfWeek[now.getDay()]; // Get the current day of the week
  const day = String(now.getDate()).padStart(2, "0"); // Get the date (e.g., 30) and pad with 0 if needed
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Get the month (e.g., 11) and pad with 0
  const year = now.getFullYear(); // Get the full year (e.g., 2024)

  const formattedDate = `${currentDay} - ${day}/${month}/${year}`; // Format the string
  document.getElementById("currentDayDate").textContent = formattedDate; // Populate the div
}

// Call the function to populate the day and date
updateCurrentDayDate();

// get the checkbox status YES or NO
const buttonTest = document.getElementById("button-test");
const checkbox = document.getElementById("check-pregnant");

// check if the user select yes ot no on the checkbox

// buttonTest.addEventListener("click", function (event) {
//   event.preventDefault();
//   let selectedValue = checkbox.checked ? "Yes" : "No";
//   alert(selectedValue);
// });

// Validate the DOB over 18 and valid DOB
document.addEventListener("DOMContentLoaded", () => {
  const dobInput = document.getElementById("dob");
  const dobError = document.getElementById("dob-error");

  dobInput.addEventListener("blur", () => {
    const dobValue = dobInput.value;

    const birthDate = new Date(dobValue);
    const today = new Date();

    // Check if the entered date is valid (Not NaN)
    if (isNaN(birthDate.getTime())) {
      dobError.textContent = "Please enter a valid date.";
      dobError.classList.remove("hidden");
      return;
    }

    // Calculate age
    const ageDiff = today.getFullYear() - birthDate.getFullYear();
    const isOver18 =
      ageDiff > 18 ||
      (ageDiff === 18 &&
        (today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate())));

    // Ensure age is not more than 90 years
    const isUnder90 =
      ageDiff < 90 ||
      (ageDiff === 90 && today.getMonth() >= birthDate.getMonth());

    // If the age is not between 18 and 90 years, show error
    if (!isOver18 || !isUnder90) {
      dobError.textContent = "Please enter a valid date.";
      dobError.classList.remove("hidden");
      dobInput.value = ""; // Clear invalid input
    } else {
      dobError.classList.add("hidden");
    }
  });
});
