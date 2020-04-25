const getCellByPos = require('../getCellByPosition');

const currColorWrapper = document.querySelector('.curr-icon');

export default function fillCellAtPosition(x, y, cellHeight, cellsInRow, cellWidth, cells) {
  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);
  for (let i = 0; i < cellUnderCursor.length; i += 1) {
    if (cellUnderCursor[i]) {
      cellUnderCursor[i].curcolor = `${currColorWrapper.style.backgroundColor}`;
      cellUnderCursor[i].fill(`${currColorWrapper.style.backgroundColor}`);
    }
  }
}
