const stars = document.getElementById("stars");
const mountains_front = document.getElementById("mountains_front");
const mountains_behind = document.getElementById("mountains_behind");
const moon = document.getElementById("moon");
const text = document.getElementById("text");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  stars.style.left = `${value * 0.25}px`;
  moon.style.top = `${value * 1.05}px`;
  mountains_behind.style.top = `${value * 0.5}px`;
  text.style.marginRight = `${value * 4}px`;
  text.style.marginTop = `${value * 1.5}px`;
  btn.style.marginTop = `${value * 1.5}px`;
});
