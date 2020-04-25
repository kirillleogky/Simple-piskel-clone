import drawCanvas from '../canvas/drawCanvas';

const addFrameDOM = require('./addFrameDOM');

document.addEventListener('click', (event) => {
  const frames = document.querySelectorAll('.frame');
  if (event.target === document.querySelector('.frame_add-btn')) {
    addFrameDOM();
    event.stopImmediatePropagation();
    drawCanvas(16, 16);
  }
  if (event.target.classList.contains('frame-canvas')) {
    const storageFrame = JSON.parse(localStorage.getItem(`frame_${event.target.closest('.frame').id}`));
    let currCanvasSize = 16;
    if (storageFrame.length === 4096) {
      currCanvasSize = 8;
    }
    if (storageFrame.length === 16384) {
      currCanvasSize = 4;
    }
    for (let i = 0; i < frames.length; i += 1) {
      frames[i].classList.remove('frame-active');
    }
    event.target.closest('.frame').classList.add('frame-active');
    drawCanvas(currCanvasSize, currCanvasSize, storageFrame);
    event.stopImmediatePropagation();
  }
  if (event.target.classList.contains('del-btn')) {
    let currFrame = event.target.closest('.frame');
    let currCanvasSize = 16;
    if (currFrame.classList.contains('frame-active') && frames.length > 1) {
      currFrame.remove();
      localStorage.removeItem(`frame_${currFrame.id}`);

      const currFrames = document.querySelectorAll('.frame');
      currFrame = currFrames[currFrames.length - 1];
      currFrame.classList.add('frame-active');
      const storageFrame = JSON.parse(localStorage.getItem(`frame_${currFrame.id}`));
      if (storageFrame.length === 4096) {
        currCanvasSize = 8;
      }
      if (storageFrame.length === 16384) {
        currCanvasSize = 4;
      }
      drawCanvas(currCanvasSize, currCanvasSize, storageFrame);
    }
  }
  if (event.target.classList.contains('copy-btn')) {
    const currFrame = event.target.closest('.frame');
    let currCanvasSize = 16;
    if (currFrame.classList.contains('frame-active')) {
      const storageFrame = JSON.parse(localStorage.getItem(`frame_${currFrame.id}`));
      if (storageFrame.length === 4096) {
        currCanvasSize = 8;
      }
      if (storageFrame.length === 16384) {
        currCanvasSize = 4;
      }
      for (let i = 0; i < frames.length; i += 1) {
        frames[i].classList.remove('frame-active');
      }
      currFrame.classList.add('frame-active');
      addFrameDOM();
      event.stopImmediatePropagation();
      drawCanvas(currCanvasSize, currCanvasSize, storageFrame);
    }
  }
});
