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
    let result = true;
    for (let i = n - 1; i >= 1; i--) {
        if ((n % i === 0) && (i !== 1)) {
            result = false; break;
        }
    }
    return result;
};

for (let num = 1; num <= 100; num++) {

    if (isSimple(num)) {
        console.log('простое', num);
    }
}