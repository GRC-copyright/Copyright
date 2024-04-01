const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can add your logic here to handle the form data
  // For example, you can send the data to a server using AJAX
  alert(` Machudale bsdk ${name} with email ${email} from Graviton Limited`);

  // Reset the form after submission
  form.reset();
});
