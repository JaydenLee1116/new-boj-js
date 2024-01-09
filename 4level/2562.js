const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const numbersArr = input.map(Number);
  const max = Math.max(...numbersArr);
  const maxIndex = numbersArr.indexOf(max);
  console.log(max);
  console.log(maxIndex + 1);
};

logAnswer(input);
