const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const N = +input[0];

  return (2 ** N + 1) ** 2;
};

console.log(getAnswer(input));
