//chain
function brakechain() {
  var a;
  a = document.getElementById("chain");
  a.innerHTML = "&#xf0c1;";
  setTimeout(function () {
    a.innerHTML = "&#xf127;";
  }, 1000);
}
brakechain();
setInterval(brakechain, 2000);
//typewriter
var typed = new Typed(".animate", {
  strings: [" innovation meets creativity..."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

//Theme Toggle

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggleMoon = () => {
//   moonIcon.classList.toggle("diplay-none");
//   sunIcon.classList.toggle("display-block");
// };
// const iconToggleSun = () => {
//   moonIcon.classList.toggle("diplay-block");
//   sunIcon.classList.toggle("display-none");
// };

const iconToggle = () => {
  moonIcon.classList.toggle("diplay-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme == "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    moonIcon.classList.add("display-none");

    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");

    return;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
  // iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});
themeCheck();
