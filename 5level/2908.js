const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const reverse = num => Number(num.toString().split('').reverse().join(''));
const logAnswer = input => {
  const [a, b] = input[0].split(' ').map(Number);
  console.log(Math.max(reverse(a), reverse(b)));
};

logAnswer(input);
