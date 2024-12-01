const Form = document.getElementById('my-form');
const Names = document.getElementById('contact-inputs');
const Status = document.getElementById('status'); // Ensure there's a status element to show results

// Function to send email
function sendEmail() {
    const bodyMessage = This is the Full Phrase: ${Names.value};

    // Ensure input validation
    if (!Names.value.trim()) {
        alert("Please enter a valid name or subject.");
        return;
    }

    // Send email using API key
    Email.send({
        SecureToken: "0D53DEB5AE6331432AEFD110E48DE921AB023C4B156AE238FE800A2CF100349985019BAE60D8F48674062421819827B0",
        To: "samsonnwanna26@gmail.com", 
        From: "mikebrew001@gmail.com", 
        Subject: Names.value,
        Body: bodyMessage
    }).then((message) => {
        if (message === "OK") {
            Status.style.display = "block";
            Status.innerText = "Email sent successfully!";
        } else {
            Status.style.display = "block";
            Status.innerText = Error: ${message};
        }
    }).catch((error) => {
        console.error("Email send error:", error);
        Status.style.display = "block";
        Status.innerText = "An error occurred while sending the email.";
    });
}

Form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    sendEmail();
});
