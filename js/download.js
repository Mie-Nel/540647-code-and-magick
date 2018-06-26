'use strict';

(function () {
  window.download = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    var url = 'https://js.dump.academy/code-and-magick/data';

    xhr.open('GET', url);

    // onLoad = function (data) {
    //   // console.log(data)
    // };

    // onError = function (message) {
    //   // console.error(message)
    // };

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        // console.log(xhr.response)
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.send();
  };
})();
