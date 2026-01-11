// <CHANGE> Refactored for modern minimalist design with improved UX
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const nextBtn1 = document.getElementById("nextBtn1");
const nextBtn2 = document.getElementById("nextBtn2");
const prevBtn2 = document.getElementById("prevBtn2");

// <CHANGE> Added form validation function
function validateForm() {
  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameError.textContent = "";
  emailError.textContent = "";


  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    nameInput.classList.add("inputError");
    isValid = false;
  } else {
    nameInput.classList.remove("inputError");
  }

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("inputError");
    isValid = false;
  } else {
    emailInput.classList.remove("inputError");
  }

  return isValid;
}

// <CHANGE> Page 1 navigation with validation
nextBtn1.addEventListener("click", () => {
  if (!validateForm()) return;

  page1.style.display = "none";
  page2.style.display = "flex";
});

// <CHANGE> Page 2 topic selection logic
let selectedTopics = [];
const optionsContainer = document.querySelector(".options");

optionsContainer.addEventListener("click", (e) => {
  const option = e.target.closest(".option");
  if (!option) return;

  const topic = option.querySelector(".option-text").textContent;

  if (selectedTopics.includes(topic)) {
    selectedTopics = selectedTopics.filter(t => t !== topic);
    option.classList.remove("active");
  } else {
    selectedTopics.push(topic);
    option.classList.add("active");
  }
});

// <CHANGE> Back button to return to page 1
prevBtn2.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "flex";
});

// <CHANGE> Page 2 submit with topic validation
nextBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedTopics.length === 0) {
    alert("Please select at least one topic of interest");
    return;
  }
  page2.style.display = "none";
  page3.style.display = "flex";
  saveUserData()
  redirectToDashboard();
});


function saveUserData() {
  const userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    topics: selectedTopics
  }
  localStorage.setItem("userData", JSON.stringify(userData))

}

// <CHANGE> Auto-redirect after 2 seconds
function redirectToDashboard() {
  setTimeout(() => {
    window.location.href = "./dashboard.html";
  }, 4000);
}
