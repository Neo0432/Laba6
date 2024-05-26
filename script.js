"use strict"; //эту строку нужно просто принять что она есть

let groupOfStudents = []; //массив, хранящий студентов группы
let tbody = document.querySelector("#tbody"); //переменная, чтобы обращаться к телу таблицы в HTML

//функция добавления студента в таблицу
function addToTable(StudContent) {
  let tr = document.createElement("tr"); //создание тега строки
  tr.innerHTML = `<td>${StudContent.name}</td>
          <td>${StudContent.bth}</td>
          <td>${StudContent.addmission}</td>
          <td>${StudContent.course}</td>
          <td>${StudContent.group}</td>
          <td>${StudContent.avr}</td>`; //innerHTML определяет то, что содержится внутри тега
  tbody.append(tr); //добавление тега tr с его дочерними элементами в тело таблицы
}

//сортировка массива пузырьком
function sortTable(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i].avr < arr[i + 1].avr) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.table(arr);
  printSortedTable(arr);
  return arr;
}

function printSortedTable(arr) {
  let output = ``; //строка для вывода в HTML
  groupOfStudents.forEach((StudContent) => {
    //перебор массива со студентами
    output += `<tr><td>${StudContent.name}</td>
    <td>${StudContent.bth}</td>
    <td>${StudContent.addmission}</td>
    <td>${StudContent.course}</td>
    <td>${StudContent.group}</td>
    <td>${StudContent.avr}</td></tr>`;
  }); //добавление к выводу строку по каждому студенту

  tbody.innerHTML = output; //заполнение тела таблицы отсортированными данными
}

//Кнопка сортиорвки
let sortButton = document.querySelector("#sortButton"); //переменная с кнопкой в HTML
sortButton.addEventListener("click", () => sortTable(groupOfStudents)); //определение действия при нажатии на кнопку

//Обработка данных с формы
let form = document.getElementById("addStudent"); //переменная с формой
const submitButton = document.querySelector("#submitButton"); //переменная с кнопкой "Добавить"
form.addEventListener("submit", (e) => {
  e.preventDefault(); //отменяет стандартное поведение при отправке формы
  let formData = new FormData(form); //FormData извлекает данные из формы ввиде объекта
  let StudContent = {
    //создание удобного объекта с данными формы
    name: formData.get("name"),
    bth: formData.get("bth"),
    addmission: formData.get("addmission"),
    course: formData.get("course"),
    group: formData.get("group"),
    avr: formData.get("avr"),
  };
  groupOfStudents.push(StudContent); //Добавление объекта в массив
  addToTable(StudContent); //вызов функции чтобы добавить в HTMl
  document.myForm.reset(); //Сброс формы (очистка полей)
  // console.table(groupOfStudents); //просто дебаг-вывод
});

// module.export = sortTable;
