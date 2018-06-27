'use strict';

(function () {
  var upload = function (data, onLoad) {
    var url = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', url);
    xhr.send(data);
  };

  window.uploadEvent = {
    upload: upload
  };
})();
