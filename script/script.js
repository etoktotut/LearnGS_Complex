"use strict";
const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const startInputNumber = (mess) => {
    let num1 = prompt(mess);
    if (num1 === null) {
        return null;
    }
    if (!isNumber(+num1)) {
        return startInputNumber("Введите число!");
    }
    return +num1;
};

const getGame = () => {
    let x = Math.floor(Math.random() * 99 + 1);
    console.log("x: ", x);
    let y = 10;
    const game = (mes) => {
        if (y--) {
            let num = startInputNumber(mes);
            if (num === null) {
                alert("Игра окончена");
                return 0;
            }
            if (num === x) {
                return 1;
            }
            if (num > x) {
                return game("Загаданное число меньше, осталось " + y + " попыток");
            }
            return game("Загаданное число больше, осталось " + y + " попыток");
        }
        return 2;
    };
    return game;
};


const upGame = () => {
    const myGame = getGame();
    let resultGame = myGame("Введите число от 1 до 100");
    if (resultGame > 0) {
        let mess2 = resultGame === 1 ? "Вы угадали!" : "Попытки закончились!";
        if (confirm(mess2 + " Сыграем еще?")) {
            return upGame();
        }
    }
};

upGame();