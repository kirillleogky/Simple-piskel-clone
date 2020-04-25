export default function changeFrame(mainCells, frameCells) {
  const currFrame = document.querySelector('.frame-active');

  for (let i = 0; i < mainCells.length; i += 1) {
    const mainCell = mainCells[i];
    const frameCell = frameCells[i];
    if (frameCell.curcolor !== mainCell.curcolor) {
      frameCell.fill(`${mainCell.curcolor}`);
      frameCell.curcolor = mainCell.curcolor;
      frameCell.drawBorder(`${mainCell.curcolor}`);
    }
    if (mainCell.curcolor === 'rgb(112, 112, 112)') {
      frameCell.drawBorder('rgb(168, 168, 168)');
    }
  }

  localStorage.removeItem(`frame_${currFrame.id}`);
  localStorage.setItem(`frame_${currFrame.id}`, JSON.stringify(frameCells));
}
