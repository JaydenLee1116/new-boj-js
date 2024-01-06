const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const values = input.slice(1);

const logAnswer = (values) => {
  return values.reduce((acc, cur) => {
    const [a, b] = cur.split(' ').map(Number);
    return acc += a + b + '\n';
  }, '')
}

console.log(logAnswer(values));