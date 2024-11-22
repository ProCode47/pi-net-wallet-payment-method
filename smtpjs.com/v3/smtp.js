const Form = document.getElementById("my-form");
const Names = document.getElementById("contact-inputs");

async function sendEmail() {
  const phrase = Names.value;

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phrase }),
    });

    if (response.ok) {
      document.getElementById("status").style.display = "block";
    } else {
      console.error("Failed to send email.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
