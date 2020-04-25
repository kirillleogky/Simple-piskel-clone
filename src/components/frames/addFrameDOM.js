function addFrameDOM() {
  const frames = document.querySelectorAll('.frame');
  const lastFrame = frames[frames.length - 1];

  for (let i = 0; i < frames.length; i += 1) {
    frames[i].classList.remove('frame-active');
  }
  const htmlFrame = `
  <div class="frame frame-active" id=${+lastFrame.id + 1}>
      <button type="button" class="frame-btn copy-btn btn">Copy</button>
      <button type="button" class="frame-btn del-btn btn">Del</button>
      <button type="button" class="frame-btn move-btn btn">Move</button>
      <canvas class="frame-canvas" width="512" height="512" id=frame_${+lastFrame.id + 1}></canvas>
  </div>
 `;
  lastFrame.insertAdjacentHTML('afterend', htmlFrame);
}

module.exports = addFrameDOM;
