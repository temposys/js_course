let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
// Установите текст для теста
    document.getElementById("inputText").value = testText;

// Сбросьте результаты и таймер
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

// Измените текст и функциональность кнопки
    var button = document.getElementById("btn");
    button.innerHTML = "Завершить тест";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Отключить ввод пользователя
    document.getElementById("userInput").readOnly = true;

    // Рассчитать время, прошедшее, и слова в минуту (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // в секундах
    var userTypedText = document.getElementById("userInput").value;

    // Разделить текст с помощью регулярного выражения, чтобы правильно подсчитать слова
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Значение по умолчанию

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Отобразить результаты
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Результаты теста на печать:</h2>" +
        "<p>Всего символов: " + userTypedText.length +"</p>" +
        "<p>Набрано слов: " + typedWords + "</p>" +
        "<p>Время: " + timeElapsed.toFixed(2) + " секунд</p>" +
        "<p>Слова в минуту (WPM): " + wpm + "</p>";

    // Сбросить кнопку
    var button = document.getElementById("btn");
    button.innerHTML = "Начать тест";
    button.onclick = startTest;
}
