'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BLACK = '#000000';
var WHITE = '#ffffff';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP_SHADOW = 10;
var COLOR_SHADOW = 'rgba(0, 0, 0, 0, 0.7)';
var COLOR_MAIN_PLAYER = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function (min, max) {
  var random = Math.random() * (max - min) + min;
  return random;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = BLACK;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var randomNumber = getRandomColor(20, 100);
  var random = 'hsl(' + 240 + ',' + 100 + '%' + ',' + randomNumber + '%)';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = BLACK;
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_GAP + GAP * 2);

    ctx.fillStyle = players[i] === 'Вы' ? COLOR_MAIN_PLAYER : random;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_GAP + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) - BAR_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
}
;
