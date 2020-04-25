const onePixel = document.getElementById('one-pixel');
const twoPixel = document.getElementById('two-pixel');
const threePixel = document.getElementById('three-pixel');
const fourPixel = document.getElementById('four-pixel');


function choosePenSize(cells, topIndex, leftIndex, pixelIndex, cellsInRow) {
  const arrCurr = [];
  if (onePixel && twoPixel && threePixel && fourPixel) {
    if (onePixel.classList.contains('active')) {
      arrCurr.push(cells[topIndex + leftIndex]);
      return arrCurr;
    }

    if (twoPixel.classList.contains('active')) {
      arrCurr.push(cells[pixelIndex]);
      arrCurr.push(cells[pixelIndex + cellsInRow]);
      if (pixelIndex % cellsInRow !== cellsInRow - 1) {
        arrCurr.push(cells[pixelIndex + 1]);
        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);
      }
      return arrCurr;
    }

    if (threePixel.classList.contains('active')) {
      arrCurr.push(cells[pixelIndex]);
      arrCurr.push(cells[pixelIndex + cellsInRow]);
      arrCurr.push(cells[pixelIndex + (cellsInRow * 2)]);

      if (pixelIndex % cellsInRow !== cellsInRow - 1) {
        arrCurr.push(cells[pixelIndex + 1]);
        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);
        arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 1]);
        if ((pixelIndex + 1) % cellsInRow !== cellsInRow - 1) {
          arrCurr.push(cells[pixelIndex + 2]);
          arrCurr.push(cells[pixelIndex + cellsInRow + 2]);
          arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 2]);
        }
      }
      return arrCurr;
    }

    if (fourPixel.classList.contains('active')) {
      arrCurr.push(cells[pixelIndex]);
      arrCurr.push(cells[pixelIndex + cellsInRow]);
      arrCurr.push(cells[pixelIndex + (cellsInRow * 2)]);
      arrCurr.push(cells[pixelIndex + (cellsInRow * 3)]);

      if (pixelIndex % cellsInRow !== cellsInRow - 1) {
        arrCurr.push(cells[pixelIndex + 1]);
        arrCurr.push(cells[pixelIndex + cellsInRow + 1]);
        arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 1]);
        arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 1]);
        if ((pixelIndex + 1) % cellsInRow !== cellsInRow - 1) {
          arrCurr.push(cells[pixelIndex + 2]);
          arrCurr.push(cells[pixelIndex + cellsInRow + 2]);
          arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 2]);
          arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 2]);
          if ((pixelIndex + 2) % cellsInRow !== cellsInRow - 1) {
            arrCurr.push(cells[pixelIndex + 3]);
            arrCurr.push(cells[pixelIndex + cellsInRow + 3]);
            arrCurr.push(cells[pixelIndex + (cellsInRow * 2) + 3]);
            arrCurr.push(cells[pixelIndex + (cellsInRow * 3) + 3]);
          }
        }
      }
      return arrCurr;
    }
  }
  arrCurr.push(cells[topIndex + leftIndex]);
  return arrCurr;
}

module.exports = choosePenSize;
