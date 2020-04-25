const activeButtonClick = require('../components/activeButtons/activeBtnClick');

describe("activeBtnClick", () => {
  const pencil = document.createElement('div');

  it("add class to the button", () => {
    activeButtonClick(pencil);
    expect(pencil.classList.contains('active')).toEqual(true);
  });
  it("remove class from the button", () => {
    activeButtonClick(pencil);
    expect(pencil.classList.contains('active')).toEqual(false);
  });
});
