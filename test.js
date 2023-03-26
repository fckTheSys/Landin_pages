


//let articleDiv = document.querySelector("div.article");
// создаем элемент
//let elem = document.createElement("h2");
// создаем для него текст
//let elemText = document.createTextNode("Привет мир");
// добавляем текст в элемент в качестве дочернего элемента
//elem.appendChild(elemText);
// добавляем элемент в блок div



//Позволяет задавать или получать текстовое содержимое элемента и его потомков.
//text = element.textContent;
//element.textContent = "Это просто текст";





//копируем текст из блока, назначаем её переменую
let text = document.querySelector(".copy").textContent;

//создаем тектовую ноду из полученых данных, назначем ей переменную
//let CopyCTND = document.createTextNode(text);
//console.log(CopyCTND);

//Определяем место куда нужно вставить текст
let Paste_place = document.querySelector('.paste')
console.log(Paste_place);

//создаем тег <p></p> и назачаем ему класс
//let Paragrhap = document.createElement('p');
//Paragrhap.className = "two";

//Вставляем тектовоую ноду в наш тег <p></p>
//Paragrhap.appendChild(CopyCTND);

//Вставляем цельный елемент с класом и текстом в документ
//Paste_place.appendChild(Paragrhap);
///////////////////////

//определяем все елементы класса как массив
//let textToPast = Array.from(document.querySelectorAll('.paste-2'));
//console.log(textToPast);

//let card = Array.from(document.querySelectorAll('.copy'));
//console.log(card);
/////////////////////////////////



///перебор массива, и обращение к нему по индфикатору или другому селектору 
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[1]); // call green
}

//для дом елементов
var divs = document.getElementsByTagName('div');
for (var i = 0, div; div = divs[i]; i++) {
  /* Обработать div некоторой операцией */
}
//////////////////////////


var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});

////////////////

const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM'];

console.log(emails);
// => [ 'VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM' ]

for (let i = 0; i < emails.length; i += 1) {
  const email = emails[i];

  // toLowerCase() — стандартный метод js,
  // преобразующий строку в нижний регистр
  const normalizedEmail = email.toLowerCase();
  // Заменяем значение
  emails[i] = normalizedEmail;
};


console.log(emails);
// => [ 'vasya@gmail.com', 'igor@yandex.ru', 'netid@hot.com' ]


const copy_item = Array.from(document.querySelectorAll('.copy'));

for ( let i = 0; i < copy_item.length; i++) {
    const arr = copy_item[i];
    const textNode = document.createTextNode(copy_item[i].textContent);
    let Paragrhap = document.createElement('p');
    Paragrhap.className = "two";
    Paragrhap.appendChild(textNode);
    copy_item[i]= textNode.textContent;
    };

    console.log(copy_item);   

 let place_to_paste_1 = document.querySelectorAll('.second');
 for (let i = 0; i < place_to_paste_1.length; i++) {
  place_to_paste_1[i].textContent = copy_item[i];
 };


//place_to_paste_1[1].appendChild(node_paste_1[0]);

