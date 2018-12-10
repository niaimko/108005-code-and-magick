'use strict';

// найдём и покажем окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
