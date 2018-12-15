'use strict';

// количество персонажей
var NUMBER_OF_WIZARDS = 4;
// массив имён персонажей
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// массив фамилий персонажей
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// массив цвета мантий персонажей
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// массив цвета глаз персонажей
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// найдём и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим элемент в который мы будем вставлять похожих персонажей
var similarPersonages = document.querySelector('.setup-similar');
var similarListElement = similarPersonages.querySelector('.setup-similar-list');

// находим шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция для выбора случайного элемента из массива
var getRandomElement = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

// функция для генерации случайного имени из элементов двух массивов
var getRandomName = function (myArray1, myArray2) {
  return getRandomElement(myArray1) + ' ' + getRandomElement(myArray2);
};

// функция по созданию массива персонажей

var createArray = function (arraySize) {
  var arr = new Array(arraySize);
  for (var i = 0; i < arraySize; i++) {
    arr[i] = {};
    arr[i].name = getRandomName(wizardName, wizardSurname);
    arr[i].coatColor = getRandomElement(wizardCoatColor);
    arr[i].eyesColor = getRandomElement(eyesColor);
  }
  return arr;
};

var wizards = createArray(NUMBER_OF_WIZARDS);

// функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  // копируем элемент
  var wizardElement = similarWizardTemplate.cloneNode(true);

  // вставляем данные
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов

var fillBlock = function (arrayWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrayWizards.length; i++) {
    // добавляем элемент в конец указанного
    fragment.appendChild(renderWizard(arrayWizards[i]));
  }
  // добавляем элемент в конец указанного
  similarListElement.appendChild(fragment);
};

// заполняем блок
fillBlock(wizards);

// найдем и покажем блок с похожими персонажами
similarPersonages.classList.remove('hidden');
