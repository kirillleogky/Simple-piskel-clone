const mainPage = document.querySelector('.head_nav_list-link');

const bucket = document.getElementById('bucket');
const chooseColor = document.getElementById('choose_color');
const pencil = document.getElementById('pencil');
const fillAll = document.getElementById('fill_all');
const stroke = document.getElementById('stroke');
const eraser = document.getElementById('eraser');

const currColor = document.querySelector('.curr-icon');
const extraColor = document.querySelector('.extra-icon');
const changeColor = document.querySelector('.change_color');

const onePixel = document.getElementById('one-pixel');
const twoPixel = document.getElementById('two-pixel');
const threePixel = document.getElementById('three-pixel');
const fourPixel = document.getElementById('four-pixel');

const canvas32x32 = document.getElementById('32x32');
const canvas64x64 = document.getElementById('64x64');
const canvas128x128 = document.getElementById('128x128');


const modalMainPage = document.getElementById('modal_window-main_page');
const modalBucket = document.getElementById('modal_window-bucket');
const modalChooseColor = document.getElementById('modal_window-choose_color');
const modalPencil = document.getElementById('modal_window-pencil');
const modalFillAll = document.getElementById('modal_window-fill_all');
const modalStroke = document.getElementById('modal_window-stroke');
const modalEraser = document.getElementById('modal_window-eraser');
const modalCurrColor = document.getElementById('modal_window-curr_color');
const modalExtraColor = document.getElementById('modal_window-extra_color');
const modalChangeColor = document.getElementById('modal_window-change_color');
const modalOnePixel = document.getElementById('modal_window-one_pixel');
const modalTwoPixel = document.getElementById('modal_window-two_pixel');
const modalThreePixel = document.getElementById('modal_window-three_pixel');
const modalFourPixel = document.getElementById('modal_window-four_pixel');
const modalCanvas32x32 = document.getElementById('modal_window-canvas32x32');
const modalCanvas64x64 = document.getElementById('modal_window-canvas64x64');
const modalCanvas128x128 = document.getElementById('modal_window-canvas128x128');

document.addEventListener('keydown', (event) => {
  const key = event.code;
  if (key === `Key${modalMainPage.value.toUpperCase()}`) {
    mainPage.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalBucket.value.toUpperCase()}`) {
    bucket.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalChooseColor.value.toUpperCase()}`) {
    chooseColor.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalPencil.value.toUpperCase()}`) {
    pencil.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalFillAll.value.toUpperCase()}`) {
    fillAll.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalStroke.value.toUpperCase()}`) {
    stroke.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalEraser.value.toUpperCase()}`) {
    eraser.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalCurrColor.value.toUpperCase()}`) {
    currColor.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalExtraColor.value.toUpperCase()}`) {
    extraColor.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalChangeColor.value.toUpperCase()}`) {
    changeColor.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalOnePixel.value.toUpperCase()}`) {
    onePixel.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalTwoPixel.value.toUpperCase()}`) {
    twoPixel.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalThreePixel.value.toUpperCase()}`) {
    threePixel.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalFourPixel.value.toUpperCase()}`) {
    fourPixel.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalCanvas32x32.value.toUpperCase()}`) {
    canvas32x32.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalCanvas64x64.value.toUpperCase()}`) {
    canvas64x64.click();
    event.stopImmediatePropagation();
  }
  if (key === `Key${modalCanvas128x128.value.toUpperCase()}`) {
    canvas128x128.click();
    event.stopImmediatePropagation();
  }
});
