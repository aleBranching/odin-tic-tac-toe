let gameBoard = (() => {
  let gameArea = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let _randomValue = "la di da di";

  let resetArea = function () {
    gameArea = [
      [, , ,],
      [, , ,],
      [, , ,],
    ];
  };

  return { gameArea, resetArea };
})();

// console.log(gameBoard.gameArea);

let gameFlow = (() => {
  let whosTurn = "x";
  // debugger;
  let method = "";

  let getWhosTurn = () => {
    return whosTurn;
  };
  function checkForWinner() {
    let win = false;
    let winner = "";

    function checkRows() {
      for (row in gameBoard.gameArea) {
        if ((row = ["x", "x", "x"])) {
          win = true;
          winner = "x";
        }
        if ((row = ["o", "o", "o"])) {
          win = true;
          winner = "o";
          console.log("here");
        }
      }
    }

    function checkCollumns() {
      // debugger;
      for (let colIndex = 0; colIndex < 3; colIndex++) {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
          let collumn =
            gameBoard.gameArea[colIndex][rowIndex] +
            gameBoard.gameArea[colIndex][rowIndex] +
            gameBoard.gameArea[colIndex][rowIndex];

          console.log("the collumn", collumn);
          if (collumn == "xxx") {
            win = true;
            winner = "x";
            method = "collumn";
          }
          if (collumn === "ooo") {
            win = true;
            winner = "o";
            console.log("here");
            method = "collumn";
          }
        }
      }
    }
    checkCollumns();

    let firstDiagonal =
      gameBoard.gameArea[0][0] +
      gameBoard.gameArea[1][1] +
      gameBoard.gameArea[2][2];
    let secondDiagonal =
      gameBoard.gameArea[2][0] +
      gameBoard.gameArea[1][1] +
      gameBoard.gameArea[0][2];

    if (firstDiagonal === "xxx" || secondDiagonal === "xxx") {
      win = true;
      winner = "x";
    }
    if (firstDiagonal === "ooo" || secondDiagonal === "ooo") {
      win = true;
      winner = "o";
      console.log("here");
    }
    if (win) {
      alert(`The winner is ${winner}`);
    }
    console.log("firstDiagonal", firstDiagonal);
    console.log("secondDiagonal", secondDiagonal);
    return { win: win, winner: winner };
  }

  let changeTurn = () => {
    whosTurn = whosTurn == "x" ? "o" : "x";
  };

  return { getWhosTurn, changeTurn, checkForWinner };
})();

let players = (symbol) => {
  symbol = symbol;
  score = 0;

  function updateScore() {
    score += 1;
  }

  function getScore() {
    return score;
  }

  return { updateScore, getScore };
};

playerX = players("x");

playerY = players("y");
let result = "";

let displayController = (() => {
  let boxesDivs = document.querySelectorAll(".box");
  // function populateGameArea(row, index) {
  // }

  function populateGameArray(row, index, content) {
    gameBoard.gameArea[row][index] = content;
  }

  function populateBoxes() {
    boxesDivs.forEach((aBoxDiv) => {
      let row = aBoxDiv.dataset.row;
      let index = aBoxDiv.dataset.index;
      aBoxDiv.textContent = gameBoard.gameArea[row][index];
      // populateGameArea(row, index);
    });
  }

  function clickBoxes() {
    boxesDivs.forEach((aBoxDiv) => {
      aBoxDiv.addEventListener("click", () => {
        if (aBoxDiv.textContent !== "") {
          return;
        }
        let row = aBoxDiv.dataset.row;
        let index = aBoxDiv.dataset.index;
        let turn = gameFlow.getWhosTurn();
        gameFlow.changeTurn();

        populateGameArray(row, index, turn);
        aBoxDiv.textContent = turn;
        gameFlow.checkForWinner();
      });
    });
  }

  clickBoxes();

  return { populateBoxes, boxesDivs };
})();

// debugger;
displayController.populateBoxes();
