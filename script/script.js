"use strict";

const arr = ['235', '335', '735', '435', '186', '678', '455'];

const out2or4 = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
        if (parseInt(arr1[i].slice(0, 1)) === 2 || parseInt(arr1[i].slice(0, 1)) === 4) {
            console.log(arr1[i]);
        }
    }


};

out2or4(arr);

console.log("End of Part 1");

const isSimple = (n) => {

    if (n === 1 || n === 4) {
        return false;
    }

    if (n === 2 || n === 3) {
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    for (let k = 3; k <= n / 3 + 1; k += 2) {
        if (n % k === 0) { return false; }
    }
    return true;
};

for (let num = 1; num <= 10000; num++) {

    if (isSimple(num)) {
        console.log('Простое число ' + num + ' делится на 1 и на ' + num + '.');
    }
}

