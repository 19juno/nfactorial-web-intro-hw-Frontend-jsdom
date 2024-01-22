console.log("Salem alem");
// Поиск элементов
// Таблицу с id="age-table".
let myTable = document.getElementById("age-table");
console.log(myTable);

// Все элементы label внутри этой таблицы (их три).
let myLabel = myTable.querySelectorAll("#age-table label");
console.log(myLabel);

// Первый td в этой таблице (со словом «Age»).
let firstTd = document.querySelector("td");
console.log(firstTd);

// Форму form с именем name="search".
let myForm = document.getElementsByName("search")[0];
console.log(myForm);

//Первый input в этой форме.
let firstInput = myForm.querySelector("input");
console.log(firstInput);

// Последний input в этой форме.
let allInputs = myForm.querySelectorAll("input");
allInputs.forEach((val, i) => {
  if (i === allInputs.length - 1) console.log(val);
});

// Что выведет этот код?

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert(body.firstChild.data); // что выведет?

// выводит BODY  , и все, получается все содержимое ранее html , заменяется через
// innerHTML на текст имя тэга элемента body
