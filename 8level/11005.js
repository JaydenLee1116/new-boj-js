const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const [N, B] = input[0].split(' ');

  return (+N).toString(+B).toUpperCase();
};

console.log(getAnswer(input));
