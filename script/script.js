"use strict";

const treeDots = function (arg) {
    if (typeof (arg) === "string") {
        arg = arg.trim();
        return arg.length > 30 ? arg.slice(0, 29) + '...' : arg;
    } else {
        alert('Переданный в функцию treeDots аргумент не является строкой');
    }

};
// чисто для проверки
console.log(treeDots('          qjhfgwjqhfjekhgfjkwqhfgqjwkhgfkjwqhfgjkwqhfgjqwkhegfjqwhgefwqjhefjwhefhhhhh               ') + '4555');
