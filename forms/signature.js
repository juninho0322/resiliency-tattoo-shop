document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("signature");
  const ctx = canvas.getContext("2d");

  let isDrawing = false;

  // Set initial canvas dimensions after the window fully loads
  window.onload = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  // Adjust the canvas size in case the window resizes (optional)
  window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });

  function startDrawing(event) {
    isDrawing = true;
    ctx.lineWidth = 2; // Set line thickness
    ctx.strokeStyle = "#000"; // Set line color (black)
    ctx.beginPath();
    ctx.moveTo(getMouseX(event), getMouseY(event));
  }

  function draw(event) {
    if (!isDrawing) return;
    ctx.lineTo(getMouseX(event), getMouseY(event));
    ctx.stroke();
  }

  function stopDrawing() {
    if (isDrawing) {
      isDrawing = false;
      ctx.closePath();
    }
  }

  function getMouseX(event) {
    return event.clientX - canvas.getBoundingClientRect().left;
  }

  function getMouseY(event) {
    return event.clientY - canvas.getBoundingClientRect().top;
  }

  // Mouse events
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  // Handle touch events for mobile
  canvas.addEventListener("touchstart", (event) => {
    event.preventDefault();
    startDrawing(event.touches[0]);
  });

  canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    draw(event.touches[0]);
  });

  canvas.addEventListener("touchend", stopDrawing);

  // Optional: Clear the canvas when the user clicks a clear button (if you have one)
  const clearButton = document.getElementById("clear-signature");

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      event.preventDefault();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }

  // Validation for the canvas on form submission - CANVAS CANNOT BE EMPTY
  const form = document.querySelector("form");
  const signRequested = document.getElementById("sign-request");

  form.addEventListener("submit", (event) => {
    if (canvasIsEmpty()) {
      event.preventDefault(); // Prevent form submission
      signRequested.classList.remove("hidden");
      signRequested.textContent = "Please sign off";
    } else {
      signRequested.classList.add("hidden");
    }
  });

  function canvasIsEmpty() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
      if (
        pixels[i] !== 0 ||
        pixels[i + 1] !== 0 ||
        pixels[i + 2] !== 0 ||
        pixels[i + 3] !== 0
      ) {
        return false; // If any non-transparent pixel is found
      }
    }
    return true; // Canvas is empty
  }
});
