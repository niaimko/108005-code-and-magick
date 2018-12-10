'use strict';

// найдём и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// находим элемент в который мы будем вставлять похожих персонажей
var similarListElement = userDialog.querySelector('.setup-similar-list');

// находим шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// массив имён персонажей
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// массив фамилий персонажей
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// массив цвета мантий персонажей
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// массив цвета глаз персонажей
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция для выбора случайного элемента из массива
var getRandomElement = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

// функция для генерации случайного имени из элементов двух массивов
var getRandomName = function (myArray1, myArray2) {
  return getRandomElement(myArray1) + ' ' + getRandomElement(myArray2);
};

// создаем массив из 4 сгенерированных js объектов
var wizards = [
  {
    name: getRandomName(wizardName, wizardSurname),
    coatColor: getRandomElement(wizardCoatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomName(wizardName, wizardSurname),
    coatColor: getRandomElement(wizardCoatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomName(wizardName, wizardSurname),
    coatColor: getRandomElement(wizardCoatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomName(wizardName, wizardSurname),
    coatColor: getRandomElement(wizardCoatColor),
    eyesColor: getRandomElement(eyesColor)
  }
];

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

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  // добавляем элемент в конец указанного
  fragment.appendChild(renderWizard(wizards[i]));
}
// добавляем элемент в конец указанного
similarListElement.appendChild(fragment);

// найдем и покажем блок с похожими персонажами
userDialog.querySelector('.setup-similar').classList.remove('hidden');
