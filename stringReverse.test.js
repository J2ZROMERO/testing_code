const reverse = require('./stringReverse');

test ('the string must be reversed', () => {
  //Assert
    expect (reverse("jose")).toMatch("esoj")
});