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

var typed = new Typed(".animate", {
  strings: [" innovation meets creativity..."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
