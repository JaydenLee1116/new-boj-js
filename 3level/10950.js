const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input[0];
const testCases = [];

for (let i = 1; i <= T; i++) {
  testCases.push(input[i].split(' ').reduce((acc, cur) => +acc + +cur, 0));
}

console.log(testCases.join('\n'));