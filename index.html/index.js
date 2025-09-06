function sentMail(event) {
  event.preventDefault(); 

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_s4ixwpo";   
  const templateID = "template_fhyz3rm"; 

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("✅ Your message was sent successfully!");
    })
    .catch(err => {
      console.error("❌ Error:", err);
      alert("❌ Failed to send message. Please try again.");
    });

  return false;
}