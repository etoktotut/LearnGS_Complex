"use strict";
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const rusDayOfWeek = (n) => {
    return (n === 0) ? 6 : n--;
};
const boldWarp = (s) => {
    return "<b>" + s + "</b>";
};
const italicWarp = (s) => {
    return "<i>" + s + "</i>";
};

let dayOfWeek = new Date();
dayOfWeek = rusDayOfWeek(dayOfWeek.getDay()); // получаем текущий русский номер дня недели

const wbody = document.querySelector("body");
for (let i = 0; i < 7; i++) {
    let dayToSite = (i > 4) ? italicWarp(week[i]) : week[i];
    dayToSite = (i === dayOfWeek) ? boldWarp(dayToSite) : dayToSite;
    wbody.innerHTML += dayToSite + '<br>';
}