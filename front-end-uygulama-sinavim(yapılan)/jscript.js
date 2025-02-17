const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const links = document.querySelectorAll(".pages a");
const nameInput = document.getElementById("names");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");
const contactBtn = document.querySelector(".contacts button");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".pages a");

//Smooth Scroll

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

//Scroll Up Button

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

contactBtn.addEventListener("click", function () {
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    telInput.value.trim() === ""
  ) {
    alert("Please fill in all fields!");
  } else {
    alert("Form successfully submitted");
  }
});


menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  if(!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove("active")
  }
})