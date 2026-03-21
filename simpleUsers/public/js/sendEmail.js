export function sendEmail() {
  const sendEmailBtn = document.getElementById("send-email-btn");
  sendEmailBtn.addEventListener("click", async () => {
    try {
      const res = await fetch("/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "fox.2025.owl@gmail.com",
          subject: "Test from button",
          html: "<p>This was triggered by a button click.</p>"
        })
      });

      const data = await res.json();
      console.log("Email response:", data);

      if (data.success) {
        alert("Email sent!");
      } else {
        alert("Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    }
  });
}