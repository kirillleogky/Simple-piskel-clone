function activeButtonClick(button, buttonClassName) {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
  } else {
    const currButtons = document.querySelectorAll(`.${buttonClassName}`);
    currButtons.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    button.classList.add('active');
  }
}

module.exports = activeButtonClick;
