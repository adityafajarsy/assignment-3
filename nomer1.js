// ADITYA FAJAR SATYA YUDHA

function isArithmeticProgression(numbers) {
    if (numbers.length <= 2) {
        return true;
    }

const interval = numbers[1] - numbers[0];
for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i-1] !== interval) {
        return false;
    }
}

return true;
}

console.log(isArithmeticProgression ([1, 2, 3, 4, 5]));
console.log(isArithmeticProgression ([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression ([2, 4, 6, 8]));
console.log(isArithmeticProgression ([2, 6, 18, 54]));
console.log(isArithmeticProgression ([1, 2, 3, 4, 7, 9]));