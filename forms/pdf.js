document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Capture form data
  const fullName = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const cityState = document.getElementById("city-state").value;

  // Capture checkbox values and corresponding labels
  const checkboxes = [
    {
      id: "checkbox1",
      label:
        "I fully understand the risks, known and unknown, can lead to injury including but not limited to: infections, scarring, difficulties in the detection of melanoma and allergic reaction to tattoo pigment, latex gloves and or soaps.",
    },
    {
      id: "checkbox2",
      label:
        "I waive and release to the fullest extent permitted by law any persons of the Tattoo Studio from all liability whatsoever, including but not limited to, any and all claims or causes of actions that I, my estate, heirs, executors or assign may have for personal injury or otherwise, including any direct and/ or consequential damages, which results or arise from the procedure and application of my tattoo, whether caused by the negligence or fault of either the Tattoo Studio or otherwise.",
    },
    {
      id: "checkbox3",
      label:
        "I am not under the influence of alcohol or drugs, and I am voluntarily submitting to be tattooed by the Tattoo Studio without duress or coercion.",
    },
    {
      id: "checkbox4",
      label:
        "I do not suffer from diabetes, epilepsy, hemophilia, heart condition(s), nor do I take blood-thinning medication. I do not have any other medical or skin condition that may interfere with the procedure, application or healing of the tattoo. I am not pregnant or nursing. I do not have a mental impairment that may affect my judgment in getting a tattoo.",
    },
    {
      id: "checkbox5",
      label:
        "I agree that the Tattoo Studio has a NO REFUND policy on tattoos and or retail sales and I will not ask for a refund for any reason whatsoever.",
    },
    {
      id: "checkbox6",
      label:
        "I have been given aftercare instructions and understand that the aftercare process is up to each individual customer, and any problem that arises with the tattoo after it is completed is not part of the Tattoo Studio or employees responsibility.",
    },
    {
      id: "checkbox7",
      label:
        "I also understand that the employees at the Tattoo Studios are operating in compliance to the law, and will give me the professional standard, in terms of sterilization, usage of disposable instruments, and artistic standard.",
    },
    {
      id: "checkbox8",
      label:
        "I hereby declare that I am of legal age (and have provided valid proof of age and identification) and am competent to sign this agreement.",
    },
  ];

  // Create a new jsPDF instance
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add content to the PDF
  const margin = 15; // Margin for top and bottom
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  let yPosition = margin; // Initialize Y position for content

  // Add header
  doc.setFontSize(16);
  doc.setFont("Helvetica", "bold");
  doc.text("Tattoo Consent Form", margin, yPosition);
  yPosition += 15;

  // Add personal information
  doc.setFontSize(12);
  doc.setFont("Helvetica", "bold");
  doc.text("Full Name:", margin, yPosition);
  doc.setFont("Helvetica", "normal");
  doc.text(fullName, margin + 30, yPosition);
  yPosition += 10;
  doc.setFont("Helvetica", "bold");
  doc.text("Date of Birth:", margin, yPosition);
  doc.setFont("Helvetica", "normal");
  doc.text(dob, margin + 30, yPosition);
  yPosition += 10;
  doc.setFont("Helvetica", "bold");
  doc.text("Phone:", margin, yPosition);
  doc.setFont("Helvetica", "normal");
  doc.text(phone, margin + 30, yPosition);
  yPosition += 10;
  doc.setFont("Helvetica", "bold");
  doc.text("Email:", margin, yPosition);
  doc.setFont("Helvetica", "normal");
  doc.text(email, margin + 30, yPosition);
  yPosition += 10;
  doc.setFont("Helvetica", "bold");
  doc.text("City/State:", margin, yPosition);
  doc.setFont("Helvetica", "normal");
  doc.text(cityState, margin + 30, yPosition);
  yPosition += 15;

  // Loop through checkboxes and add to the PDF
  checkboxes.forEach((checkbox, index) => {
    const isChecked = document.getElementById(checkbox.id).checked;
    const statusText = isChecked ? "AGREED" : "NOT AGREED"; // Status text
    const statusX = pageWidth - margin - 30; // X position for status text

    if (yPosition + 20 > pageHeight - margin) {
      // Check if the content fits in one page
      doc.addPage(); // Create a new page if necessary
      yPosition = margin; // Reset Y position
    }

    // Add clause text
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    const wrappedText = doc.splitTextToSize(
      `${index + 1}. ${checkbox.label}`,
      pageWidth - 2 * margin - 20
    ); // Wrap long text within available width

    wrappedText.forEach((line, lineIndex) => {
      if (lineIndex === 0) {
        // First line of the clause text is aligned with the header margin
        doc.text(line, margin + 20, yPosition); // Add clause text to the PDF
      } else {
        // Subsequent lines are indented
        doc.text(line, margin + 20, yPosition); // Add clause text to the PDF
      }
      yPosition += 10; // Move down for the next line
    });

    // Add status text
    const statusY = yPosition - 10; // Position for the status text
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold"); // Bold status text
    doc.text(statusText, statusX, statusY); // Add status text in front of the last line

    yPosition += 15; // Move down for next clause
  });

  // Add a "Signature" label at the bottom with the final signature image
  if (yPosition + 60 > pageHeight - margin) {
    // Check if the content fits in one page
    doc.addPage(); // Create a new page if necessary
    yPosition = margin; // Reset Y position
  }

  doc.setFontSize(12);
  doc.setFont("Helvetica", "bold");
  doc.text("Signature:", margin, yPosition);
  const signatureCanvas = document.getElementById("signature");
  const signatureDataURL = signatureCanvas.toDataURL(); // Get the image data
  doc.addImage(
    signatureDataURL,
    "PNG",
    margin,
    yPosition + 10,
    pageWidth - 2 * margin,
    40
  ); // Adjust size and position for final signature

  // Add disclaimer text
  yPosition += 50; // Move down after signature
  const disclaimerText =
    "This document is generated as a confirmation of your agreement to the terms and conditions outlined above.";
  const wrappedDisclaimer = doc.splitTextToSize(
    disclaimerText,
    pageWidth - 2 * margin
  ); // Wrap disclaimer text
  wrappedDisclaimer.forEach((line, lineIndex) => {
    if (yPosition + 10 > pageHeight - margin) {
      // Check if the content fits in one page
      doc.addPage(); // Create a new page if necessary
      yPosition = margin; // Reset Y position
    }
    doc.text(line, margin, yPosition); // Add disclaimer text to the PDF
    yPosition += 10; // Move down for next line
  });

  // Generate PDF and name it based on the full name
  const pdfFileName = fullName
    ? `${fullName}_Tattoo_Consent_Form.pdf`
    : "Tattoo_Consent_Form.pdf";
  doc.save(pdfFileName);

  // If you want to preview it on the screen
  window.open(doc.output("bloburl"), "_blank");
});
