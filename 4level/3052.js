const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const numbers = input.map(Number);
  const numbersDividedBy42 = numbers.map(number => number % 42);
  const uniqueNumbersDividedBy42 = [...new Set(numbersDividedBy42)];
  console.log(uniqueNumbersDividedBy42.length);
}

logAnswer(input);