(function () {
  const button = document.querySelector("#change");
  const hexPlaceholder = document.querySelector("#hex");
  const body = document.querySelector("body");
  const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const changeHEX = function changeHEX() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      const selected = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[selected];
    }
    hexPlaceholder.textContent = hex; // can also use - textContent, innerHTML, innerText
    body.style.backgroundColor = hex;
  };
  button.addEventListener("click", changeHEX);
})();
