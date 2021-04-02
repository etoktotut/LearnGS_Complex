const num = 266219;
const num_str = String(num);
let result = 1;

for (i = 0; i < num_str.length; i++) {
    result *= num_str[i];
}
console.log(result);
result = result ** 3;
console.log(result);// в задании этого нет ( но без этого как то не наглядно)
console.log(String(result).substr(0, 2));











