const collection = document.querySelectorAll('.book'),
      elemsTitleLink = document.querySelectorAll('h2 > a'),
      elemBody = document.querySelector('body'),
      elemAdv = document.querySelector('.adv'),
      elemLi = document.querySelectorAll('ul > li'),
      newElemLi = document.createElement('li');
console.log(collection);
console.log(elemsTitleLink);
console.log(elemLi);
//TASK 1
collection[0].before(collection[1]);
collection[5].after(collection[2]);
collection[3].before(collection[4]);

//TASK2
elemBody.style.backgroundImage = "url(image/you-dont-know-js.jpg)";

//TASK3
elemsTitleLink[4].textContent = 'Книга 3. this и Прототипы Объектов';

//TASK4
elemAdv.remove();

//TASK 5
elemLi[3].after(elemLi[6]);
elemLi[6].after(elemLi[8]);
elemLi[47].after(elemLi[55]);
elemLi[55].after(elemLi[49]);
elemLi[49].after(elemLi[50]);
elemLi[48].after(elemLi[52]);
elemLi[52].after(elemLi[53]);

//TASK 6
newElemLi.textContent = 'Глава 8: За пределами ES6';
elemLi[25].after(newElemLi);