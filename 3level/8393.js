const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

const getSum = (n) => n * (n + 1) / 2;

console.log(getSum(n));