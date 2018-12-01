var values1 = [
  { value: 2, block: getBlock(0, 2), x: 0, y: 2, possibleValues: [] },
  { value: 5, block: getBlock(0, 6), x: 0, y: 6, possibleValues: [] },
  { value: 1, block: getBlock(1, 1), x: 1, y: 1, possibleValues: [] },
  { value: 7, block: getBlock(1, 3), x: 1, y: 3, possibleValues: [] },
  { value: 5, block: getBlock(1, 5), x: 1, y: 5, possibleValues: [] },
  { value: 2, block: getBlock(1, 7), x: 1, y: 7, possibleValues: [] },
  { value: 4, block: getBlock(2, 0), x: 2, y: 0, possibleValues: [] },
  { value: 9, block: getBlock(2, 4), x: 2, y: 4, possibleValues: [] },
  { value: 7, block: getBlock(2, 8), x: 2, y: 8, possibleValues: [] },
  { value: 4, block: getBlock(3, 1), x: 3, y: 1, possibleValues: [] },
  { value: 9, block: getBlock(3, 2), x: 3, y: 2, possibleValues: [] },
  { value: 7, block: getBlock(3, 6), x: 3, y: 6, possibleValues: [] },
  { value: 3, block: getBlock(3, 7), x: 3, y: 7, possibleValues: [] },
  { value: 8, block: getBlock(4, 0), x: 4, y: 0, possibleValues: [] },
  { value: 1, block: getBlock(4, 2), x: 4, y: 2, possibleValues: [] },
  { value: 3, block: getBlock(4, 2), x: 4, y: 4, possibleValues: [] },
  { value: 4, block: getBlock(4, 2), x: 4, y: 6, possibleValues: [] },
  { value: 9, block: getBlock(4, 2), x: 4, y: 8, possibleValues: [] },
  { value: 3, block: getBlock(5, 2), x: 5, y: 1, possibleValues: [] },
  { value: 6, block: getBlock(5, 2), x: 5, y: 2, possibleValues: [] },
  { value: 2, block: getBlock(5, 2), x: 5, y: 6, possibleValues: [] },
  { value: 1, block: getBlock(5, 2), x: 5, y: 7, possibleValues: [] },
  { value: 2, block: getBlock(6, 2), x: 6, y: 0, possibleValues: [] },
  { value: 8, block: getBlock(6, 2), x: 6, y: 3, possibleValues: [] },
  { value: 4, block: getBlock(6, 2), x: 6, y: 8, possibleValues: [] },
  { value: 8, block: getBlock(7, 2), x: 7, y: 1, possibleValues: [] },
  { value: 9, block: getBlock(7, 2), x: 7, y: 3, possibleValues: [] },
  { value: 2, block: getBlock(7, 2), x: 7, y: 5, possibleValues: [] },
  { value: 6, block: getBlock(7, 2), x: 7, y: 7, possibleValues: [] },
  { value: 7, block: getBlock(8, 2), x: 8, y: 2, possibleValues: [] },
  { value: 8, block: getBlock(8, 2), x: 8, y: 6, possibleValues: [] }
];
var values2 = [
  { value: 8, block: getBlock(0, 7), x: 0, y: 7, possibleValues: [] },
  { value: 5, block: getBlock(0, 8), x: 0, y: 8, possibleValues: [] },
  { value: 2, block: getBlock(1, 3), x: 1, y: 3, possibleValues: [] },
  { value: 1, block: getBlock(1, 4), x: 1, y: 4, possibleValues: [] },
  { value: 9, block: getBlock(1, 8), x: 1, y: 8, possibleValues: [] },
  { value: 9, block: getBlock(2, 0), x: 2, y: 0, possibleValues: [] },
  { value: 6, block: getBlock(2, 1), x: 2, y: 1, possibleValues: [] },
  { value: 8, block: getBlock(2, 4), x: 2, y: 4, possibleValues: [] },
  { value: 1, block: getBlock(2, 6), x: 2, y: 6, possibleValues: [] },
  { value: 5, block: getBlock(3, 0), x: 3, y: 0, possibleValues: [] },
  { value: 8, block: getBlock(3, 3), x: 3, y: 3, possibleValues: [] },
  { value: 1, block: getBlock(3, 7), x: 3, y: 7, possibleValues: [] },
  { value: 6, block: getBlock(3, 8), x: 3, y: 8, possibleValues: [] },
  { value: 8, block: getBlock(5, 0), x: 5, y: 0, possibleValues: [] },
  { value: 9, block: getBlock(5, 1), x: 5, y: 1, possibleValues: [] },
  { value: 6, block: getBlock(5, 5), x: 5, y: 5, possibleValues: [] },
  { value: 7, block: getBlock(5, 8), x: 5, y: 8, possibleValues: [] },
  { value: 9, block: getBlock(6, 2), x: 6, y: 2, possibleValues: [] },
  { value: 7, block: getBlock(6, 4), x: 6, y: 4, possibleValues: [] },
  { value: 5, block: getBlock(6, 7), x: 6, y: 7, possibleValues: [] },
  { value: 2, block: getBlock(6, 8), x: 6, y: 8, possibleValues: [] },
  { value: 3, block: getBlock(7, 0), x: 7, y: 0, possibleValues: [] },
  { value: 5, block: getBlock(7, 4), x: 7, y: 4, possibleValues: [] },
  { value: 4, block: getBlock(7, 5), x: 7, y: 5, possibleValues: [] },
  { value: 4, block: getBlock(8, 0), x: 8, y: 0, possibleValues: [] },
  { value: 8, block: getBlock(8, 1), x: 8, y: 1, possibleValues: [] }
];
var values3 = [];
var board1 = [];
var board2 = [];

createEmptyBoard(values1, board1);
createEmptyBoard(values2, board2);

solve(board1);
solve(board2);

console.log("Board 1");
printBoard(board1);

console.log("Board 2");
printBoard(board2);

function createEmptyBoard(valueList, arr) {
  for (var i = 0; i < 9; i++) {
    for (var k = 0; k < 9; k++) {
      var block = getBlock(i, k);
      var value = getValue(valueList, i, k);
      arr.push({
        value: value,
        block: block,
        x: i,
        y: k,
        possibleValues: []
      });
    }
  }
}

function getValue(valueList, x, y) {
  var value = valueList.find(a => a.x === x && a.y === y);

  if (value === undefined) return 0;
  return value.value;
}

function solve(cells) {
  var emptyCellCount = 81;

  while (cells.filter(c => c.value === 0).length < emptyCellCount) {
    emptyCellCount = cells.filter(c => c.value === 0).length;

    for (var blockIndex = 0; blockIndex < 9; blockIndex++) {
      var cc = 9;

      while (
        cells.filter(a => a.block === blockIndex && a.value === 0).length < cc
      ) {
        cc = cells.filter(a => a.block === blockIndex && a.value === 0).length;

        var blockCells = cells.filter(
          a => a.block === blockIndex && a.value === 0
        );

        getPossibilities(cells, blockCells);
        checkHorizontally(blockCells);
        getPossibilities(cells, blockCells);
        checkVertically(blockCells);
      }
    }
  }
}

function getBlock(x, y) {
  if (x < 3 && y < 3) return 0;
  if (x > 2 && x < 6 && y < 3) return 1;
  if (x > 5 && y < 3) return 2;
  if (x < 3 && y > 2 && y < 6) return 3;
  if (x > 2 && x < 6 && y > 2 && y < 6) return 4;
  if (x > 5 && y > 2 && y < 6) return 5;
  if (x < 3 && y > 5) return 6;
  if (x > 2 && x < 6 && y > 5) return 7;

  return 8;
}

function getPossibilities(allCells, blockCells) {
  for (var cellIndex = 0; cellIndex < blockCells.length; cellIndex++) {
    blockCells[cellIndex].possibleValues = [];

    for (var i = 1; i < 10; i++) {
      var possible = isPossible(allCells, blockCells[cellIndex], i);

      if (possible) {
        blockCells[cellIndex].possibleValues.push(i);
      }
    }
  }
}

function isPossible(cells, cell, value) {
  var exist = cells.filter(
    c => c.block == cell.block && c.value > 0 && c.value == value
  );
  if (exist !== undefined && exist.length > 0) return false;

  var horizontalCheck = getValues(cells, cell, "horizontal");
  if (
    horizontalCheck !== undefined &&
    horizontalCheck.find(a => a == value) !== undefined
  ) {
    return false;
  }

  var verticalCheck = getValues(cells, cell, "vertical");
  if (
    verticalCheck !== undefined &&
    verticalCheck.find(a => a == value) !== undefined
  ) {
    return false;
  }

  return true;
}

function getValues(cells, cell, orientation) {
  var values = cells.filter(
    c =>
      (orientation == "horizontal" ? c.y == cell.y : c.x == cell.x) &&
      c.value > 0
  );

  return values !== undefined ? values.map(a => a.value) : values;
}

function checkHorizontally(cells) {
  var hcs = cells.filter(c => c.possibleValues.length == 1);

  for (var i = 0; i < hcs.length; i++) {
    hcs[i].value = hcs[i].possibleValues[0];
  }
}

function checkVertically(cells) {
  for (var i = 1; i < 10; i++) {
    var vcs = cells.filter(a => a.possibleValues.find(a => a === i));

    if (vcs !== undefined && vcs.length === 1) {
      vcs.value = i;
    }
  }
}

function printBoard(arr) {
  var boardText = "";

  for (var i = 0; i < arr.length; i++) {
    boardText += arr[i].value + " ";

    if ((i + 1) % 3 === 0) {
      boardText += "\t";
    }

    if ((i + 1) % 9 === 0) {
      boardText += "\n";
    }

    if ((i + 1) % 27 === 0) {
      boardText += "\n";
    }
  }

  console.log(boardText);
}
