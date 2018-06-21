'use strict';

(function () {

  // функция получения рандомного элемента из массива
  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.colorize = function (element, arr) {
    element.addEventListener('click', function () {
      var color = getRandomValue(arr);
      if (element.tagName === 'DIV') {
        element.setAttribute('style', 'background: ' + color);
      } else {
        element.setAttribute('style', 'fill: ' + color);
      }
    });
  };
})();
