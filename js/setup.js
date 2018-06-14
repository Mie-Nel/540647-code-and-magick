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

// var setup = document.querySelector('.setup');
// setup.classList.remove('hidden');

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


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

function onInputFocus() {
  userNameInput.focus();
  document.removeEventListener('keydown', onPopupEscPress);
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  onInputFocus();
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

function getColorCoat() {
  wizardCoat.style.fill = coatColors[getRandomNumber(coatColors)];
  return wizardCoat;
}

function getColorEyes() {
  wizardEyes.setAttribute('style', 'fill: ' + eyesColors[getRandomNumber(eyesColors)]);
  return wizardEyes;
}

function getColorFireball() {
  wizardFireball.setAttribute('style', 'background: ' + fireballColors[getRandomNumber(fireballColors)]);
  return wizardFireball;
}


wizardCoat.addEventListener('click', function () {
  getColorCoat();
});

wizardEyes.addEventListener('click', function () {
  getColorEyes();
});

wizardFireball.addEventListener('click', function () {
  getColorFireball();
});
