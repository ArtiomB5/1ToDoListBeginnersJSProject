let submitButton = document.querySelector('.submitButton');
//получение элемента (кнопки) с классом submitButton
submitButton.addEventListener('click', submitResult);
//запуск функции submitResult при нажатии на кнопку с классом submitButton

let clearListButton = document.querySelector('.clearButton');
//получение элемента (кнопки) с классом clearButton
clearListButton.addEventListener('click', clearInputField);
//запуск функции clearInputField при нажатии на кнопку с классом clearButton

function submitResult() {
    let noteData = document.getElementById('noteContent').value;
    //получение данных элемента по id noteContent - содержимого поля ввода

    if (noteData === "") {
        alert('Please input text in input field!')
        return 0;
    }
    //проверка поля ввода на пустоту. Если поле ввода пустое то демонстрируется сообщение и происходит выход из функции

    let divFirst = document.createElement('div');
    //создание блочного элемента div - одной задачи to-do листа

    let now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();
    //получение  текущего месяца, даты, часа, минут, секунд, милисекунд
    let uniqClass = '' + month + date + hours + minutes + seconds + milliseconds;
    //создание уникального id для задачи листа

    let noteDeleteButton = '<button class="deleteNote" ' + 'onclick="onClickDelete(' + uniqClass + ')">X</button>';
    //создание кнопки удаления задачи классом, и обрабочика нажатия на кнопку. Обработчик вызывает функцию onClickDelete и передает ей id созданной задачи to-do листа
    let noteDoneButton = '<button class="doneNote" ' + 'onclick="onClickDone(' + uniqClass + ')">Done</button>';
    //создание кнопки пометки задачи как выполненной, и обрабочика нажатия на кнопку. Обработчик вызывает функцию onClickDone и передает ей id созданной задачи to-do листа

    divFirst.id = uniqClass;
    //присвоение созданной задаче to-do листа уникального, ранее созданного id
    divFirst.innerHTML = '<p class="text-style">' + noteData + "</p> " + noteDeleteButton + " " + noteDoneButton;
    //заполнение содержимого созданной задачи to-do листа контентом (noteData) и добавление кнопок noteDeleteButton и noteDoneButton
    divFirst.style.backgroundColor = '#F9BABA';
    //описание стиля не выполненной задачи
    
    let toDoList = document.getElementById('list'); 
    //получение данных элемента по id list
    toDoList.prepend(divFirst);
    //добавление созданной задачи в начало списка задач

    clearInputField();
    //вызов функции очищающей поле ввода
}

//функция очистки поля ввода
function clearInputField() {
    document.getElementById('noteContent').value = "";
    //получение данных поля ввода по id noteContent и очистка поля ввода
}

//функция удаления задачи из списка
function onClickDelete(divid) {
    document.getElementById(divid).remove();
    //получение данных задачи по id (передается при нажатии кнопки удаления) и последующее удаление задачи
}

//функция изменения статуса задачи на выполненный
function onClickDone(inputData) {
    document.getElementById(inputData).style.backgroundColor = '#C3F9BA';
    //получение данных задачи по id (передается при нажатии кнопки изменения статуса) и последующее изменение статуса
}