const num = 266219;
const numStr = String(num);
let result = 1;

for (let i = 0; i < numStr.length; i++) {
    result *= numStr[i];
}
console.log(result);
result = result ** 3;
console.log(result);// в задании этого нет ( но без этого как то не наглядно)
console.log(String(result).substr(0, 2));











