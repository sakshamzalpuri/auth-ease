function getUserData() {
  const rawData = localStorage.getItem("userData");
  if (!rawData) return null;
  return JSON.parse(rawData);
}

function renderData() {
  const avatarInt = document.querySelector(".avatar-initial");
  const userName = document.querySelector(".user-name");
  const userEmail = document.querySelector(".user-email");
  const toggleLetter = document.querySelector(".toggle-letter");

  const data = getUserData();

  if (!data) {
    window.location.href = "./index.html";
    return;
  }

  avatarInt.textContent = data.name[0].toUpperCase();
  userName.textContent = data.name;
  userEmail.textContent = data.email;
  toggleLetter.textContent = data.name[0].toUpperCase();
}

document.addEventListener("DOMContentLoaded", renderData);

const toggleAp = document.querySelector(".toggle-apps")
const toggleInfo = document.querySelector(".user-info-overlay-toogle")

toggleAp.addEventListener("click",()=>{
    toggleInfo.classList.toggle("hidden")
})

function logoutUSer(){
    localStorage.removeItem("userData")
    window.location.href = "./index.html"
}
const logout = document.querySelector(".toggle-logout")

logout.addEventListener("click",(e)=>{
    e.preventDefault()
    logoutUSer()
})