import useTools from '../tools/useTools';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let cells = [];

export default function drawCanvas(cellWidth, cellHeight, storageCanvas) {
  cells = [];
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
      if (storageCanvas) {
        if (storageCanvas[cells.length - 1].curcolor !== cell.curcolor) {
          cell.fill(storageCanvas[cells.length - 1].curcolor);
          cell.curcolor = storageCanvas[cells.length - 1].curcolor;
          cell.drawBorder(storageCanvas[cells.length - 1].curcolor);
        }
      }
    }
  }
  useTools(cellWidth, cellHeight, cells, storageCanvas);
}
