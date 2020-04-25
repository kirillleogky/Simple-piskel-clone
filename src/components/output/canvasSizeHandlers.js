import drawCanvas from '../canvas/drawCanvas';

const btn32x32 = document.getElementById('32x32');
const btn64x64 = document.getElementById('64x64');
const btn128x128 = document.getElementById('128x128');

document.addEventListener('click', (event) => {
  switch (event.target) {
    case btn32x32:
      drawCanvas(16, 16);
      break;
    case btn64x64:
      drawCanvas(8, 8);
      break;
    case btn128x128:
      drawCanvas(4, 4);
      break;
    default:
      break;
  }
});
