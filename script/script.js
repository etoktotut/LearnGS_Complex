"use strict";
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const rusDayOfWeek = (n) => {
    return n === 0 ? 6 : n--;
};

const minSecEnding = (n) => {
    if ((n > 0 && n < 5) || (n > 20)) {
        n = n % 10;
        if (n === 1) {
            return "а";
        }
        if (n > 1 && n < 5) {
            return "ы";
        }
    }
    return "";
}


const endOfHour = (hour) => {
    if (hour === 1 || hour === 21) {
        return "";
    }
    if ((hour > 1 && hour < 5) || (hour > 21 && hour < 24)) {
        return "а";
    }
    return "ов";
}

const wbody = document.querySelector("body");
let dayOfWeek = new Date();
const numDayOfWeek = rusDayOfWeek(dayOfWeek.getDay()); // получаем текущий русский номер дня недели
wbody.style.color = 'red';
wbody.style.fontFamily = 'Arial';
wbody.style.fontWeight = 'bold';
let dateDisplay = "Сегодня " + week[numDayOfWeek] + ", " + dayOfWeek.getDate() + " " + month[dayOfWeek.getMonth()] + " " + dayOfWeek.getFullYear() + " года, ";
dateDisplay += dayOfWeek.getHours() + ' час' + endOfHour(dayOfWeek.getHours()) + " ";
dateDisplay += dayOfWeek.getMinutes() + ' минут' + minSecEnding(dayOfWeek.getMinutes()) + " " + dayOfWeek.getSeconds() + " секунд" + minSecEnding(dayOfWeek.getSeconds());
wbody.innerHTML = dateDisplay + "<br>";


// вторая часть д.з.
wbody.innerHTML += '<div class="short_time"></div>';
const shortTime = document.querySelector('.short_time');
const twoSymbolConversion = (z) => {
    let str = String(z);
    if (z < 10) {
        str = "0" + str;
    }
    return str;
};
const shortTimeUpdate = () => {
    let currDate = new Date();
    shortTime.innerHTML = "";
    shortTime.innerHTML += twoSymbolConversion(currDate.getDate()) + ":" + twoSymbolConversion(currDate.getMonth() + 1) + ":" + currDate.getFullYear() + " - ";
    shortTime.innerHTML += twoSymbolConversion(currDate.getHours()) + ":" + twoSymbolConversion(currDate.getMinutes()) + ":" + twoSymbolConversion(currDate.getSeconds());
};
shortTimeUpdate();
let sInt = setInterval(shortTimeUpdate, 1000);