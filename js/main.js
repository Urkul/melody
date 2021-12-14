$(document).ready(function () {
    var currentFloor = 2; // переменная текущего этажа
    var floorPath = $(".home-image path"); // значение отдельного этажа в SVG
    var counterUp = $(".counter-up"); // переменная увеличения этажа
    var counterDown = $(".counter-down"); // переменная уменьшения этажа
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatsPath = $(".flats path"); // значение отдельной квартиры в модальном окне
    var flatLink = $(".flat-link"); // значение отдельной квартиры в ссылке
    var currentFlat = 1; // переменная текущего этажа

    // функция наведения мышкой на этаж
    floorPath.on("mouseover", function () {
        // console.log($(this).attr("data-floor"));
        floorPath.removeClass("current-floor"); // удаление активного класса у этажей 
        currentFloor = $(this).attr("data-floor"); // получение значения текущего этажа
        $(".counter").text(currentFloor); // запись значения текущего этажа в счетчик
    });

    floorPath.on("click", toggleModal); // вызов модального окна при клике на этаж
    modalCloseButton.on("click", toggleModal); // закрытие модального окна при клике на кнопку Х  
    viewFlatsButton.on("click", toggleModal);

    flatsPath.on("mouseover", function () {
        currentFlat = $(this).attr("data-flat"); // получение значения текущей квартиры
        $(`[data-flat-description=${currentFlat}]`).toggleClass("flat-link-active"); // включение подсветки текущей квартиры добавлением класса
    });

    flatsPath.on("mouseout", function () {
        $(`[data-flat-description=${currentFlat}]`).toggleClass("flat-link-active"); // выключение подсветки текущей квартиры удалением класса
    });

    flatLink.on("mouseover", function () {
        currentFlat = $(this).attr("data-flat-description"); // получение значения текущей квартиры
        //console.log(currentFlat);
        $(`[data-flat=${currentFlat}]`).toggleClass("flat-active"); // включение подсветки текущей квартиры добавлением класса
    });

    flatLink.on("mouseout", function () {
        $(`[data-flat=${currentFlat}]`).toggleClass("flat-active"); // выключение подсветки текущей квартиры удалением класса
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

    // функция добавления и удаления класса открытия закрытия модального окна
    function toggleModal() {
        modal.toggleClass('is-open');
    }
});