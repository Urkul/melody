$(document).ready(function () {
    var currentFloor = 2; // переменная текущего этажа
    var floorPath = $(".home-image path"); // значение отдельного этажа в SVG
    var counterUp = $(".counter-up"); // переменная увеличения этажа
    var counterDown = $(".counter-down"); // переменная уменьшения этажа

    // функция наведения мышкой на этаж
    floorPath.on("mouseover", function () {
        // console.log($(this).attr("data-floor"));
        floorPath.removeClass("current-floor"); // удаление активного класса у этажей 
        currentFloor = $(this).attr("data-floor"); // получение значения текущего этажа
        $(".counter").text(currentFloor); // запись значения текущего этажа в счетчик
    });

    // отслеживание клика по кнопке вверх
    counterUp.on("click", function () {
        // проверка значения этажа
        if (currentFloor < 18) {
            currentFloor++; // добавление этажа
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматирование к переменной с этажом с 2-18 к 02-18
            $(".counter").text(usCurrentFloor); // запись значения текущего этажа в счетчик
            floorPath.removeClass("current-floor"); // удаление активного класса у этажей 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // включение подсветки текущего этажа добавлением класса
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматирование к переменной с этажом с 2-9 к 02-09
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // включение подсветки текущего этажа добавлением класса 
        }
    });
});