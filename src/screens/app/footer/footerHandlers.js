document.addEventListener('click', (event) => {
  if (event.target === document.querySelector('.footer_block-btn')) {
    document.querySelector('.main_block-modal_window').style.display = 'block';
  }
});
