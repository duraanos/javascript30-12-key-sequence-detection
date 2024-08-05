'use strict';

const pressed = [];
const secretCode = 'starboy';

window.addEventListener('keyup', function (e) {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
  console.log(pressed);
});