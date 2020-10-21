(function() {
  const $currentPlayer = document.querySelector("#current-player");
  const result = document.querySelector("#winner");
  const squares = document.querySelectorAll(".grid div");
  const overlay = document.querySelector(".overlay");
  const winningCondition = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 20],
    [20, 19, 18, 21],
    [28, 29, 26, 27],
    [9, 8, 11, 10],
    [39, 36, 37, 38],
    [2, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [23, 28, 33, 38],
    [4, 9, 14, 19],
    [22, 27, 32, 37],
    [5, 10, 15, 20],
    [21, 26, 31, 36],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [23, 29, 35, 41],
    [20, 27, 34, 41],
    [0, 7, 14, 21],
    [13, 20, 27, 34],
    [17, 22, 27, 32],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 9, 16, 23],
    [1, 8, 15, 22],
    [22, 28, 34, 40],
    [3, 9, 15, 21],
    [8, 16, 24, 32],
    [2, 8, 14, 20],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [14, 15, 16, 17],
    [22, 23, 24, 25],
    [20, 21, 22, 23],
    [26, 27, 28, 29],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 2],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [6, 13, 20, 27],
  ];
  const handleWin = (index) => {
    winningCondition.some((cond) => {
      if (cond.includes(index)) {
        let sq1 = document.querySelector(`[data-index='${cond[0]}']`).classList
            .value,
          sq2 = document.querySelector(`[data-index='${cond[1]}']`).classList
            .value,
          sq3 = document.querySelector(`[data-index='${cond[2]}']`).classList
            .value,
          sq4 = document.querySelector(`[data-index='${cond[3]}']`).classList
            .value;
        if (
          sq1 == "alpha" &&
          sq2 == "alpha" &&
          sq3 == "alpha" &&
          sq4 == "alpha"
        ) {
          result.textContent = `Winner is Alpha`;
          result.classList.remove("hide");
          overlay.classList.remove("hide");
          return true;
        } else if (
          sq1 == "beta" &&
          sq2 == "beta" &&
          sq3 == "beta" &&
          sq4 == "beta"
        ) {
          result.textContent = `Winner is Beta`;
          result.classList.remove("hide");
          overlay.classList.remove("hide");
          return true;
        }
      }
    });
  };

  const fillSquares = (first, last, currentPlayer, isSelected) => {
    for (let i = last - 1; i >= first; i--) {
      let $el = document.querySelector(`[data-index='${i}']`);
      if ($el.classList.value) continue;
      else {
        $el.classList.add(currentPlayer);
        isSelected = false;
        handleWin(i);
        break;
      }
    }
    return isSelected;
  };
  const handleClick = (e) => {
    let $currentEl = e.target,
      index = Number($currentEl.dataset.index),
      currentPlayer = $currentPlayer.textContent.trim().toLowerCase(),
      isSelected = true;
    if (index >= 0 && index < 6) {
      isSelected = fillSquares(0, 6, currentPlayer, isSelected);
    } else if (index >= 6 && index < 12) {
      isSelected = fillSquares(6, 12, currentPlayer, isSelected);
    } else if (index >= 12 && index < 18) {
      isSelected = fillSquares(12, 18, currentPlayer, isSelected);
    } else if (index >= 18 && index < 24) {
      isSelected = fillSquares(18, 24, currentPlayer, isSelected);
    } else if (index >= 24 && index < 30) {
      isSelected = fillSquares(24, 30, currentPlayer, isSelected);
    } else if (index >= 30 && index < 36) {
      isSelected = fillSquares(30, 36, currentPlayer, isSelected);
    } else {
      isSelected = fillSquares(36, 42, currentPlayer, isSelected);
    }
    if (!isSelected) {
      if (currentPlayer == "alpha") {
        currentPlayer = "beta";
        $currentPlayer.textContent = "Beta";
      } else {
        currentPlayer = "alpha";
        $currentPlayer.textContent = "Alpha";
      }
    }
  };
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
})();
