import drawCanvas from '../../components/canvas/drawCanvas';

require('./style.scss');
require('./main/main.js');
require('../../components/activeButtons/activeBtnTyping.js');
require('./footer/footerHandlers.js');

const activeButtonClick = require('../../components/activeButtons/activeBtnClick');

window.onload = () => {
  if (localStorage.length) {
    const lastFrame = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1)));
    let currCanvasSize = 16;
    if (lastFrame.length === 4096) {
      currCanvasSize = 8;
    }
    if (lastFrame.length === 16384) {
      currCanvasSize = 4;
    }
    localStorage.clear();
    drawCanvas(currCanvasSize, currCanvasSize, lastFrame);
  } else {
    drawCanvas(16, 16);
  }
};

document.addEventListener('click', (event) => {
  const btnElem = event.target.closest('.first_block-icon') || event.target.closest('.third_block-icon');
  if (btnElem) {
    if (btnElem.classList.contains('first_block-icon')) {
      activeButtonClick(btnElem, 'first_block-icon');
      event.stopImmediatePropagation();
    }
    if (btnElem.classList.contains('third_block-icon')) {
      activeButtonClick(btnElem, 'third_block-icon');
      event.stopImmediatePropagation();
    }
  }
  if (event.target === document.querySelector('.modal_window-btn')) {
    document.querySelector('.main_block-modal_window').style.display = 'none';
  }
});
