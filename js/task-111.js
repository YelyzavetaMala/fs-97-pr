//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
     /* <div class="item"> 
   <h3>Заголовок</h3>
   <p>текст текст текст</p>
   </div> */
}

  /* <button class="add-btn">add</button>
  <div class="container"></div> 
}

const btnEl = document.querySelector(".add-btn");
const blockEl = document.querySelector(".container");
btnEl.addEventListener("click"(elem) => {
     const div = document.createElement("div");
     div.classList.add("item");
     const h3 = document.createElement("h3");
     h3.textContent = "Заголовок";
     const p = document.createElement("p");
     p.textContent = "текст текст текст";
     div.append(h3, p);
     blockEl.append(div);
});
*/
 

//Виводимо кнопку з текстом "Змінити" і два інпути, при натисканні на кнопку інпути
//змінюються своїм введеним текстом

  /* <input type="text" id="js-input1" value="!!!!!!!!!!!!">
<input type="text" id="js-input2" value="????????????">
<button type="button" class="btn">Змінити</button> 
}

const input1El = document.querySelector('#js.input1');
const input2El = document.querySelector('#js.input2');
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
     console.log(input1El.value);
     /* const value1 = input1El.value;
     input1El.value = input2El.value;
     input2El.value = value1;
     [input1El.value, input2El.value] = [input2El.value, input1El.value];
}); */

/*Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
     
     const button = document.querySelector('#alertButton');
     const input = document.querySelector('#alertInput');
     button.addEventListener('click', (e) => {
          const value = input.value;
          alert(value);
     }); */

     /*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>



const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById('passwordButton');
passwordButton.addEventListener('click', () => {
     if (passwordInput.getAttribute('type') === 'password') {
          passwordInput.setAttribute('type', 'text');
            passwordButton.textContent = 'Приховати';
     } else {
          passwordInput.setAttribute('type', 'password');
          passwordButton.textContent = 'Розкрити';
     }
});
*/


/* обробник подій який повинен виводитись в сабміт 
<form class="form">
        <input type="text" name="name">
        <input type="email" name="email">
        <button type="submit">send</button>
    </form>*/
/*
const form = document.querySelector('.form');
form.addEventListener("submit", (event) => {
     event.preventDefault();
     const { name, email } = event.target.elements;
     const obj = {
          name: name.value,
          email: email.value
     }
     console.log(obj);
}); */



// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.


  /* <ul class="list"></ul> 
}

const list = document.querySelector('.list');
let value = null;
const arr = [];
do {
     value = prompt("Enter text");
    if(value) arr.push(`<li>${value}</li>` value);
} while (value);
list.insertAdjacentHTML('beforeend', arr.join(""));

*/