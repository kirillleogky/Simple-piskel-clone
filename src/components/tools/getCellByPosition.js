const choosePixelsSize = require('./penSize/choosePenSize');

function getCellByPosition(top, left, cellHeight, cellsInRow, cellWidth, cells) {
  const topIndex = Math.floor(top / cellHeight) * cellsInRow;
  const leftIndex = Math.floor(left / cellWidth);
  const currPixelIndex = topIndex + leftIndex;
  return choosePixelsSize(cells, topIndex, leftIndex, currPixelIndex, cellsInRow);
}

module.exports = getCellByPosition;
