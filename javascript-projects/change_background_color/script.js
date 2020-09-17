const button = document.querySelector("#change");
const body = document.querySelector("body");
const colors = [
  "#4e89ae",
  "#0f3460",
  "#a3d2ca",
  "#ffd571",
  "#efbbcf",
  "#ffc1fa",
  "#ade498",
];

button.addEventListener("click", (event) => {
  let selected = Math.floor(Math.random() * 7);
  body.style.backgroundColor = colors[selected];
});
