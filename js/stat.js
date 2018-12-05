'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// функция для получения случайного целого числа в заданном диапазоне
var getRandomInteger = function (min, max) {
  var randomInteger = min - 0.5 + Math.random() * (max - min + 1);
  randomInteger = Math.round(randomInteger);
  return randomInteger;
};

// функция для получения заданного цвета
var getColor = function (hue, saturation, lightness) {
  return 'hsl(240, ' + getRandomInteger(0, 100) + '%, 50%)';
};

var drawColumn = function (ctx, i, playersTime, player, maxTime) {
  ctx.fillRect(CLOUD_X + GAP * 3 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - FONT_GAP - GAP, COLUMN_WIDTH, -(BAR_HEIGHT * playersTime) / maxTime);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(playersTime), CLOUD_X + GAP * 3 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP - FONT_GAP - GAP + (-(BAR_HEIGHT * playersTime) / maxTime));
  ctx.fillText(player, CLOUD_X + GAP * 3 + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP + GAP);

  ctx.textBaseline = 'alphabetic';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getColor();
    }
    drawColumn(ctx, i, times[i], players[i], maxTime);
  }
};
