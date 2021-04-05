let lang = 'en';
const enWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const ruWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const ruenWeekDays = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
};

if (lang === 'ru') {
    ruWeek.forEach((day) => { console.log(day); });
} else {
    enWeek.forEach((day) => { console.log(day); });
}

switch (lang) {
    case 'ru':
        ruWeek.forEach((day) => { console.log(day); });
        break;
    case 'en':
        enWeek.forEach((day) => { console.log(day); });
}

ruenWeekDays[lang].forEach((day) => { console.log(day); });

let namePerson = 'Максим';

(namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');








