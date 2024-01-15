const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const DEFAULT_PIECES = [1, 1, 2, 2, 2, 8];

const getAnswer = input => {
  const pieces = input[0].split(' ').map(Number);
  const result = DEFAULT_PIECES.map((piece, index) => piece - pieces[index]);
  return result.join(' ');
};

console.log(getAnswer(input));
