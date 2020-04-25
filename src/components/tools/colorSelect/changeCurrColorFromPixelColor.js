const getCellByPos = require('../getCellByPosition');

const currColorWrapper = document.querySelector('.curr-icon');

export default function changeCurrColor(x, y, cellHeight, cellsInRow, cellWidth, cells) {
  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);
  currColorWrapper.style.backgroundColor = cellUnderCursor[0].curcolor;
}
