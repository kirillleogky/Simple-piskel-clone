import fillCellAtPosition from './pencil/fillCellAtPosition';
import useBucket from './bucket/fillTheArea';
import useEraser from './eraser/erasePixels';
import useColorSelect from './colorSelect/changeCurrColorFromPixelColor';
import useStroke from './stroke/drawStroke';
import useFillAll from './fillAll/fillAllPixels';
import addFrame from '../frames/addFrame';
import changeFrame from '../frames/changeFrame';

require('./currentAndExtraColor/currAndExtraColorHandlers.js');


const canvas = document.getElementById('canvas');
const canvasWidth = canvas.width;
const pencil = document.getElementById('pencil');
const bucket = document.getElementById('bucket');
const eraser = document.getElementById('eraser');
const colorSelect = document.getElementById('choose_color');
const stroke = document.getElementById('stroke');
const fillAll = document.getElementById('fill_all');

let startPointX;
let startPointY;


export default function drawOnTheCanvas(cellWidth, cellHeight, cells, storageCells) {
  const cellsInRow = Math.floor(canvasWidth / cellWidth);
  const frameCell = addFrame(cellWidth, cellHeight, storageCells);

  function drawByHandleMouseMove(event) {
    const pointX = event.layerX;
    const pointY = event.layerY;
    if (pencil.classList.contains('active')) {
      fillCellAtPosition(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
      event.stopImmediatePropagation();
    }
    if (eraser.classList.contains('active')) {
      useEraser(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
      event.stopImmediatePropagation();
    }
    if (stroke.classList.contains('active')) {
      useStroke(startPointX, startPointY, pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
    }
  }

  canvas.onmousedown = (event) => {
    const pointX = event.layerX;
    const pointY = event.layerY;
    if (pencil.classList.contains('active')) {
      fillCellAtPosition(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);
    }
    if (bucket.classList.contains('active')) {
      useBucket(pointX, cellHeight, cellsInRow, pointY, cellWidth, cells);
    }
    if (eraser.classList.contains('active')) {
      useEraser(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);
    }
    if (colorSelect.classList.contains('active')) {
      useColorSelect(pointX, pointY, cellHeight, cellsInRow, cellWidth, cells);
    }
    if (stroke.classList.contains('active')) {
      startPointX = Math.floor(pointX / cellHeight) * cellsInRow;
      startPointY = Math.floor(pointY / cellWidth);
      canvas.addEventListener('mousemove', drawByHandleMouseMove, false);
    }
    if (fillAll.classList.contains('active')) {
      useFillAll(cells);
    }
  };

  canvas.onmouseup = () => {
    canvas.removeEventListener('mousemove', drawByHandleMouseMove);
    changeFrame(cells, frameCell);
  };
}
