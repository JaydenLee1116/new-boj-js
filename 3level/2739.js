const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = +input[0];

const getGuGuDan = (a) => {
  let result = '';
  for (let i = 1; i <= 9; i++) {
    result += `${a} * ${i} = ${a * i}\n`;
  }
  return result;
}

console.log(getGuGuDan(a));