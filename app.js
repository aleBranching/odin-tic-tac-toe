let gameBoard = (() => {
  let gameArea = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let getGameArea = () => {
    return gameArea;
  };
  let test = "test";

  let _randomValue = "la di da di";

  let resetArea = () => {
    // debugger;
    console.log(gameArea);
    gameArea = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    displayController.populateBoxes();
  };

  return { getGameArea, resetArea };
})();

// console.log(gameBoard.gameArea);

let gameFlow = (() => {
  let whosTurn = "x";
  // debugger;
  let method = "";
  let win = "false";
  let winner = "";
  let getWinStatus = () => {
    return win;
  };
  // let random = "AAAAAAAAAAA";

  let getWhosTurn = () => {
    return whosTurn;
  };
  let checkForWinner = () => {
    // debugger;
    // this.random = "bbbbbbbbbbbbb";
    let checkRows = () => {
      for (row in gameBoard.getGameArea()) {
        if (
          JSON.stringify(gameBoard.getGameArea()[row]) ==
          JSON.stringify(["x", "x", "x"])
        ) {
          this.win = true;
          this.winner = "x";
          win = true;

          return;
        }
        if (
          JSON.stringify(gameBoard.getGameArea()[row]) ==
          JSON.stringify(["o", "o", "o"])
        ) {
          this.win = true;
          this.winner = "o";
          win = true;

          // prototype;
          return;
        }
      }
    };

    let checkCollumns = () => {
      // debugger;
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        let collumn =
          gameBoard.getGameArea()[0][rowIndex] +
          gameBoard.getGameArea()[1][rowIndex] +
          gameBoard.getGameArea()[2][rowIndex];

        if (collumn == "xxx") {
          this.win = true;
          this.winner = "x";
          method = "collumn";
          win = true;
        }
        if (collumn === "ooo") {
          this.win = true;
          this.winner = "o";
          method = "collumn";
          win = true;
        }
      }
    };

    let checkDiagonals = () => {
      let firstDiagonal =
        gameBoard.getGameArea()[0][0] +
        gameBoard.getGameArea()[1][1] +
        gameBoard.getGameArea()[2][2];
      let secondDiagonal =
        gameBoard.getGameArea()[2][0] +
        gameBoard.getGameArea()[1][1] +
        gameBoard.getGameArea()[0][2];

      if (firstDiagonal === "xxx" || secondDiagonal === "xxx") {
        this.win = true;
        this.winner = "x";
        win = true;
      }
      if (firstDiagonal === "ooo" || secondDiagonal === "ooo") {
        this.win = true;
        this.winner = "o";
        win = true;
      }
    };
    checkRows();
    checkCollumns();
    checkDiagonals();

    if (this.win == true) {
      alert(`The winner is ${this.winner}`);
    }
  };

  let changeTurn = () => {
    whosTurn = whosTurn == "x" ? "o" : "x";
    console.log(whosTurn);
  };

  return { getWhosTurn, changeTurn, checkForWinner, getWinStatus };
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
    gameBoard.getGameArea()[row][index] = content;
  }

  function populateBoxes() {
    boxesDivs.forEach((aBoxDiv) => {
      let row = aBoxDiv.dataset.row;
      let index = aBoxDiv.dataset.index;
      aBoxDiv.textContent = gameBoard.getGameArea()[row][index];
      // populateGameArea(row, index);
    });
  }

  function clickBoxes() {
    boxesDivs.forEach((aBoxDiv) => {
      aBoxDiv.addEventListener("click", () => {
        if (aBoxDiv.textContent !== "" || gameFlow.getWinStatus() == true) {
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
