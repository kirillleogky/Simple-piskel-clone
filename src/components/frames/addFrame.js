export default function addFrame(cellWidth, cellHeight, storageFrame) {
  const currFrame = document.querySelector('.frame-active');

  const frame = document.getElementById(`frame_${currFrame.id}`);
  const context = frame.getContext('2d');
  const canvasWidth = frame.width;
  const canvasHeight = frame.height;
  const cells = [];
  for (let top = 0; top < canvasWidth; top += cellWidth) {
    for (let left = 0; left < canvasHeight; left += cellHeight) {
      const cell = {
        top,
        left,
        curcolor: 'rgb(112, 112, 112)',
        fill(color) {
          context.fillStyle = color;
          context.fillRect(this.top, this.left, cellWidth, cellHeight);
        },
        drawBorder(boderColor) {
          context.beginPath();
          context.strokeStyle = boderColor;

          context.moveTo(this.top - 0.5, this.left - 0.5);
          context.lineTo(this.top - 0.5, this.left + cellWidth - 0.5);
          context.lineTo(this.top + cellHeight - 0.5, this.left + cellWidth - 0.5);
          context.lineTo(this.top + cellHeight - 0.5, this.left - 0.5);
          context.lineTo(this.top - 0.5, this.left - 0.5);
          context.stroke();
        },
        getTop() {
          return this.top;
        },
        getLeft() {
          return this.left;
        },
      };
      cells.push(cell);
      cell.fill('rgb(112, 112, 112)');
      cell.drawBorder('rgb(168, 168, 168)');
      if (storageFrame) {
        if (storageFrame[cells.length - 1].curcolor !== cell.curcolor) {
          cell.fill(storageFrame[cells.length - 1].curcolor);
          cell.curcolor = storageFrame[cells.length - 1].curcolor;
          cell.drawBorder(storageFrame[cells.length - 1].curcolor);
        }
      }
    }
  }
  localStorage.removeItem(`frame_${currFrame.id}`);
  localStorage.setItem(`frame_${currFrame.id}`, JSON.stringify(cells));
  return cells;
}
