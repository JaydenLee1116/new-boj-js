const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];

const LONG = 'long ';
const INT = 'int';

const getTypeName = N => {
  return LONG.repeat(N / 4) + INT;
};

console.log(getTypeName(N));
