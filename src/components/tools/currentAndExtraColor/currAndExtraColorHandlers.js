const currColorInput = document.getElementById('curr-icon-input');
const extraColorInput = document.getElementById('extra-icon-input');
const extraColorWrapper = document.querySelector('.extra-icon');
const currColorWrapper = document.querySelector('.curr-icon');
const changeColor = document.querySelector('.change_color');

currColorInput.addEventListener('change', () => {
  currColorWrapper.style.backgroundColor = `${currColorInput.value}`;
});
extraColorInput.addEventListener('change', () => {
  extraColorWrapper.style.backgroundColor = `${extraColorInput.value}`;
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.curr-icon') === currColorWrapper) {
    currColorInput.click();
  }
  if (event.target.closest('.extra-icon') === extraColorWrapper) {
    extraColorInput.click();
  }
  if (event.target.closest('.change_color') === changeColor) {
    currColorWrapper.style.backgroundColor = `${extraColorWrapper.style.backgroundColor}`;
  }
});
