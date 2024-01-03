const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map((item) => +item);

const getProfit = (a, b, c) => {
  if(a === b && b === c) {
    return 10000 + a * 1000;
  } else if(a === b || a === c || b === c) {
    return 1000 + (a === b ? a : c) * 100;
  }
  return Math.max(a, b, c) * 100;
}

console.log(getProfit(a, b, c));