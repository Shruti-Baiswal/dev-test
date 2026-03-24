let form = document.getElementById("custom_form");
// console.log(form);
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    question: document.getElementById("security_question").value,
    answer: document.getElementById("answer").value
  };
// let allData = JSON.parse(localStorage.getItem("formData")) || [];
let allData = JSON.parse(sessionStorage.getItem("formData")) || [];

  let checkStatus = 0;

  for (let v of allData) {
    if (v.email === data.email || v.phone === data.phone) {
      checkStatus = 1;
      break; 
    }
  }

  if (checkStatus === 1) {
    alert("Email or phone already exist");
  } else {
    allData.push(data);
    // localStorage.setItem("formData", JSON.stringify(allData));
    sessionStorage.setItem("formData", JSON.stringify(allData));

    form.reset();
  }
});
// let findData = JSON.parse(localStorage.getItem("formData")) || [];
let findData = JSON.parse(sessionStorage.getItem("formData")) || [];

let userEmail = "ab@gmail.com";
let userData = findData.find(user => user.email === userEmail);

console.log(userData);

