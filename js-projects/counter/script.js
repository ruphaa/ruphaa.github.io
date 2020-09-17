(function () {
  const counter = document.querySelector("#counter");
  const decrement = document.querySelector("#decrement");
  const increment = document.querySelector("#increment");

  increment.addEventListener("click", () => {
    let num = Number(counter.textContent);
    let current = ++num;
    counter.textContent = current;
    if (current < 0) {
      counter.style.color = "red";
    } else if (current > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "blue";
    }
  });
  decrement.addEventListener("click", () => {
    let num = Number(counter.textContent);
    let current = --num;
    counter.textContent = current;
    if (current < 0) {
      counter.style.color = "red";
    } else if (current > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "blue";
    }
  });
})();
