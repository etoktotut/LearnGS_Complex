"use strict";
let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

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
};

const twoSymbolConversion = (z) => {
    let str = String(z);
    if (z < 10) {
        str = "0" + str;
    }
    return str;
};



const wbody = document.querySelector("body");
wbody.innerHTML += '<div class="short_time">< -/div>';
const shortTime = document.querySelector('.short_time');
shortTime.style.color = 'red';
shortTime.style.fontFamily = 'Arial';
shortTime.style.fontWeight = 'bold';

const shortTimeUpdate = () => {
    let currDate = new Date();
    shortTime.innerHTML = "";
    shortTime.innerHTML += "Сегодня " + week[currDate.getDay()] + ", " + currDate.getDate() + " " + month[currDate.getMonth()] + " " + currDate.getFullYear() + " года, ";
    shortTime.innerHTML += currDate.getHours() + ' час' + endOfHour(currDate.getHours()) + " ";
    shortTime.innerHTML += currDate.getMinutes() + ' минут' + minSecEnding(currDate.getMinutes()) + " " + currDate.getSeconds() + " секунд" + minSecEnding(currDate.getSeconds()) + "<br>";
    shortTime.innerHTML += twoSymbolConversion(currDate.getDate()) + ":" + twoSymbolConversion(currDate.getMonth() + 1) + ":" + currDate.getFullYear() + " - ";
    shortTime.innerHTML += twoSymbolConversion(currDate.getHours()) + ":" + twoSymbolConversion(currDate.getMinutes()) + ":" + twoSymbolConversion(currDate.getSeconds());
};

shortTimeUpdate();
let sInt = setInterval(shortTimeUpdate, 1000);