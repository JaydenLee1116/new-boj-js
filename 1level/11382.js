const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map((item) => +item);
console.log(a + b + c);
