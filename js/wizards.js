'use strict';

(function () {
  var renderWizard = function (wizards) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    for (var i = 0; i < 4; i++) {
      var similarListElement = document.querySelector('.setup-similar-list');
      var fragment = document.createDocumentFragment();
      fragment.appendChild(renderWizard(wizards[i]));
      similarListElement.appendChild(fragment);
      window.setupEvent.setupSimilar.classList.remove('hidden');
    }
  };

  window.backend.load(successHandler, window.backend.errorHandler);
})();
