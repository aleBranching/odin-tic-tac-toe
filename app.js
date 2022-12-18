let gameBoard = (() => {
  let gameArea = [
    ["x", "x", "o"],
    ["x", "x", "o"],
    ["o", "o", "x"],
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
