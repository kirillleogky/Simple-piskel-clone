const currColorWrapper = document.querySelector('.curr-icon');

export default function fillArea(pointX, cellHeight, cellsInRow, pointY, cellWidth, cells) {
  const top = Math.floor(pointX / cellHeight) * cellsInRow;
  const left = Math.floor(pointY / cellWidth);

  const cnvSize = cells.length;
  const mainCellColor = cells[top + left].curcolor;

  const stack = [[top, left]];
  let pixel;
  while (stack.length > 0) {
    pixel = stack.pop();
    const currPixel = cells[pixel[1] + pixel[0]];

    if ((pixel[1] + pixel[0]) >= 0 && (pixel[1] + pixel[0]) <= cnvSize && currPixel !== undefined) {
      const isCurrPixelColorWrong = currPixel.curcolor !== currColorWrapper.style.backgroundColor;
      if (isCurrPixelColorWrong && currPixel.curcolor === mainCellColor) {
        currPixel.curcolor = `${currColorWrapper.style.backgroundColor}`;
        currPixel.fill(`${currColorWrapper.style.backgroundColor}`);
        currPixel.drawBorder(`${currColorWrapper.style.backgroundColor}`);
        stack.push([
          pixel[0] - 1,
          pixel[1],
        ]);
        stack.push([
          pixel[0] + 1,
          pixel[1],
        ]);
        stack.push([
          pixel[0],
          pixel[1] - cellsInRow,
        ]);
        stack.push([
          pixel[0],
          pixel[1] + cellsInRow,
        ]);
      }
    }
  }
}
