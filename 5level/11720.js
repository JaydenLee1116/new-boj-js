const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const numbers = [...input[1]].map(Number);

  console.log(numbers.reduce((acc, cur) => acc + cur, 0));
};

logAnswer(input);
