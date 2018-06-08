'use strict';

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

// функция получения рандомного элемента из массива
var getRandomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

// находим список похожих персонажей
var similarListElement = document.querySelector('.setup-similar-list');
// находим шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = names[getRandomNumber(names)] + ' ' + lastNames[getRandomNumber(lastNames)];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColors[getRandomNumber(coatColors)];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColors[getRandomNumber(eyesColors)];

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');


