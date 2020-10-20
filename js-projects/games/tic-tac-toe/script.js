(function() {
  const currentPlayer = document.querySelector("#player");
  const squares = document.querySelectorAll(".grid div");
  const refresh = document.querySelector("#refresh");
  const overlay = document.querySelector(".overlay");
  let winner = "";
  const winningcondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const reset = (e) => {
    squares.forEach((square) => {
      if (!square.classList.contains("overlay")) {
        square.classList.value = "";
      }
    });
    winner = "";
    overlay.classList.add("hide");
    currentPlayer.textContent = "PlayerX";
    currentPlayer.dataset.player = "playerX";
  };
  const handleResult = ($currentEl) => {
    let index = Number($currentEl.dataset.index);
    winningcondition.forEach((condition) => {
      if (condition.includes(index)) {
        let a = document.querySelector(`div[data-index='${condition[0]}'`)
            .classList.value,
          b = document.querySelector(`div[data-index='${condition[1]}'`)
            .classList.value,
          c = document.querySelector(`div[data-index='${condition[2]}'`)
            .classList.value;
        if (a == b && a == b && b == c) {
          winner = $currentEl.classList.value;
        }
      }
    });
    if (winner) {
      currentPlayer.textContent = `${winner} wins🎉`;
      overlay.classList.remove("hide");
    }
  };
  const playGame = (e) => {
    let $currentEl = e.target;
    if ($currentEl.classList.length) return;
    $currentEl.classList.add(currentPlayer.dataset.player);
    if (currentPlayer.dataset.player == "playerX") {
      currentPlayer.dataset.player = "playerO";
      currentPlayer.textContent = "PlayerO";
    } else {
      currentPlayer.dataset.player = "playerX";
      currentPlayer.textContent = "PlayerX";
    }
    handleResult($currentEl);
  };
  squares.forEach((square) => {
    square.addEventListener("click", playGame);
  });
  refresh.addEventListener("click", reset);
})();
