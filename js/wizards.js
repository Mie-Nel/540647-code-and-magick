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

  var render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    var similarListElement = document.querySelector('.setup-similar-list');
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    window.setupEvent.setupSimilar.classList.remove('hidden');
  };

  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (items) {
    var rank = 0;

    if (items.colorCoat === coatColor) {
      rank += 2;
    }
    if (items.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
    // var sameCoatAndEyesWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    // })
    // var sameCoatWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor;
    // });
    // var sameEyesWizards = wizards.filter(function (it) {
    //   return it.colorEyes === eyesColor;
    // });
    // var filteredWizards = sameCoatAndEyesWizards;
    // filteredWizards = filteredWizards.concat(sameCoatWizards)
    // filteredWizards = filteredWizards.concat(sameEyesWizards)
    // filteredWizards = filteredWizards.concat(wizards);

    // var uniqueWizards = filteredWizards.filter(function (it, i) {
    //   return filteredWizards.indexOf(it) === i;
    // });
    // render(uniqueWizards);
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.backend.errorHandler);
})();
