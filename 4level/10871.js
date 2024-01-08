const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const [N ,X] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);
  return numbers.filter(number => number < X).join(' ');
}

console.log(getAnswer(input));