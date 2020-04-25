const currColorWrapper = document.querySelector('.curr-icon');

export default function fillAllPixels(cells) {
  const currCells = cells;
  for (let i = 0; i < cells.length; i += 1) {
    currCells[i].curcolor = `${currColorWrapper.style.backgroundColor}`;
    currCells[i].fill(`${currColorWrapper.style.backgroundColor}`);
  }
}
