let contactform = document.querySelector("#contactform");
const submitform = document.querySelector("#submitbtn");

contactform.addEventListener("submit", function (e) {
  // e.preventDefault();
  let name = document.getElementById("contactName");
  let email = document.getElementById("contactEmail");
  let phone = document.getElementById("contactPhone");
  let message = document.getElementById("contactMessage");
  name = name.value;
  name.value = "";
  localStorage.setItem("name", name);
  email = email.value;
  localStorage.setItem("email", email);
  phone = phone.value;
  localStorage.setItem("phone", phone);
  message = message.value;
  localStorage.setItem("message", JSON.stringify(message));
  alert("submmited");
  email.value = "";
  phone.value = "";
  message = "";
  // e.target.reset();
});
