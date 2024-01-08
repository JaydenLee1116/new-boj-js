const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const [N, stringNumbers, targetNumber] = input;
  return stringNumbers.split(' ').filter(number => number === targetNumber).length;
};

console.log(getAnswer(input));
