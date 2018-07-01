'use strict';

(function () {
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  // var fireballColors = [
  //   '#ee4830',
  //   '#30a8ee',
  //   '#5ce6c0',
  //   '#e848d5',
  //   '#e6e848'
  // ];

  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomValue(coatColors);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomValue(eyesColors);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
  return wizard;
})();
