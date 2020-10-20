(function() {
  const $currentPlayer = document.querySelector("#current-player");
  const result = document.querySelector("#winner");
  const squares = document.querySelectorAll(".grid div");
  const handleClick = (e) => {
    let $currentEl = e.target,
      currentPlayer = $currentPlayer.textContent.trim().toLowerCase();
    if (currentPlayer == "alpha") {
    } else {
    }
  };
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
})();
