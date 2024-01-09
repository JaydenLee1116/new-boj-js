const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const numbersArr = input[1].split(' ').map(Number);
  const max = Math.max(...numbersArr);
  const min = Math.min(...numbersArr);
  console.log(min, max);
};

logAnswer(input);
