(function() {
  const currentPlayer = document.querySelector("#player");
  const squares = document.querySelectorAll(".grid div");
  const playGame = (e) => {
    let $currentEl = e.target;
    $currentEl.classList.add(currentPlayer.dataset.player);
    if (currentPlayer.dataset.player == "playerX") {
      currentPlayer.dataset.player = "playerO";
      currentPlayer.textContent = "PlayerO";
    } else {
      currentPlayer.dataset.player = "playerX";
      currentPlayer.textContent = "PlayerX";
    }
  };
  squares.forEach((square) => {
    square.addEventListener("click", playGame);
  });
})();
