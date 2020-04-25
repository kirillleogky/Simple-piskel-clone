const choosePixelsSize = require('../penSize/choosePenSize');

const currColorWrapper = document.querySelector('.curr-icon');

function fillArea(topIndex, leftIndex, cells, cellsInRow) {
  const currPixelIndex = topIndex + leftIndex;
  const currPixels = choosePixelsSize(cells, topIndex, leftIndex, currPixelIndex, cellsInRow);
  for (let i = 0; i < currPixels.length; i += 1) {
    if (currPixels[i]) {
      currPixels[i].curcolor = `${currColorWrapper.style.backgroundColor}`;
      currPixels[i].fill(`${currColorWrapper.style.backgroundColor}`);
    }
  }
}

export default function drawStroke(startX, startY, pX, pY, cellH, cellsInRow, cellW, cells) {
  let startPointX = startX;
  let startPointY = startY;

  const currPointX = Math.floor(pX / cellH) * cellsInRow;
  const currPointY = Math.floor(pY / cellW);


  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i];
    if (cell) {
      cell.curcolor = 'rgb(112, 112, 112)';
      cell.fill('rgb(112, 112, 112)');
      cell.drawBorder('rgb(168, 168, 168)');
    }
  }
  fillArea(startPointX, startPointY, cells, cellsInRow);
  if (startPointX < currPointX && startPointY < currPointY) {
    while (startPointX !== currPointX && startPointY !== currPointY) {
      startPointX += cellsInRow;
      startPointY += 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX > currPointX && startPointY > currPointY) {
    while (startPointX !== currPointX && startPointY !== currPointY) {
      startPointX -= cellsInRow;
      startPointY -= 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX < currPointX && startPointY === currPointY) {
    while (startPointX !== currPointX) {
      startPointX += cellsInRow;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX === currPointX && startPointY < currPointY) {
    while (startPointY !== currPointY) {
      startPointY += 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX > currPointX && startPointY === currPointY) {
    while (startPointX !== currPointX) {
      startPointX -= cellsInRow;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX === currPointX && startPointY > currPointY) {
    while (startPointY !== currPointY) {
      startPointY -= 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX > currPointX && startPointY < currPointY) {
    while (startPointX !== currPointX && startPointY !== currPointY) {
      startPointX -= cellsInRow;
      startPointY += 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
  if (startPointX < currPointX && startPointY > currPointY) {
    while (startPointX !== currPointX && startPointY !== currPointY) {
      startPointX += cellsInRow;
      startPointY -= 1;
      fillArea(startPointX, startPointY, cells, cellsInRow);
    }
  }
}
