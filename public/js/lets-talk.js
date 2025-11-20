  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual form submission

    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // validate
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "⚠️ Please fill in all fields!";
      formMessage.className = "error";
      return;
    }

    // simple email check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = "⚠️ Please enter a valid email!";
      formMessage.className = "error";
      return;
    }

    // success
    formMessage.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
    formMessage.className = "success";

    // reset form
    form.reset();
  });
