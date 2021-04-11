/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const cols = matrix[0].length;
  const rows = matrix.length;
  const result = matrix.map((item) => item.map(() => 0));

  function countMines(x, y) {
    const x0 = Math.max(0, x - 1);
    const x1 = Math.min(cols - 1, x + 1);
    const y0 = Math.max(0, y - 1);
    const y1 = Math.min(rows - 1, y + 1);
    let minesCounter = 0;

    for (let i = y0; i <= y1; i++) {
      for (let j = x0; j <= x1; j++) {
        if (matrix[i][j] && !(i === y && j === x)) minesCounter++;
      }
    }

    return minesCounter;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = countMines(i, j);
    }
  }

  return result;
}

module.exports = minesweeper;
