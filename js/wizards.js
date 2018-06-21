'use strict';

(function () {
// массив имен для персонажей
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  // массив фамилий для персонажей
  var lastNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  // массив из разных цветов для мантий
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  // массив из разных цветов для глаз
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  // цвет фаерболла
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  // функция получения рандомного элемента из массива
  var getRandomNumber = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  var renderWizard = function () {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = names[getRandomNumber(names)] + ' ' + lastNames[getRandomNumber(lastNames)];
    wizardElement.querySelector('.wizard-coat').style.fill = coatColors[getRandomNumber(coatColors)];
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[getRandomNumber(eyesColors)];

    return wizardElement;
  };

  var wizardNumbers = 4;

  var showWizards = function (item) {
    for (var i = 0; i < item; i++) {
      var similarListElement = document.querySelector('.setup-similar-list');
      var fragment = document.createDocumentFragment();
      fragment.appendChild(renderWizard());
      similarListElement.appendChild(fragment);
    }
  };

  showWizards(wizardNumbers);

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, coatColors);
  window.colorize(wizardEyes, eyesColors);
  window.colorize(wizardFireball, fireballColors);
})();
