const getCellByPos = require('../getCellByPosition');

export default function erasePixel(x, y, cellHeight, cellsInRow, cellWidth, cells) {
  const cellUnderCursor = getCellByPos(x, y, cellHeight, cellsInRow, cellWidth, cells);
  for (let i = 0; i < cellUnderCursor.length; i += 1) {
    if (cellUnderCursor[i]) {
      cellUnderCursor[i].curcolor = 'rgb(112, 112, 112)';
      cellUnderCursor[i].fill('rgb(112, 112, 112)');
      cellUnderCursor[i].drawBorder('rgb(168, 168, 168)');
    }
  }
}
