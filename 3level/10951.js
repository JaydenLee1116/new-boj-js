const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const sumResultArr = input.map(str => {
    const [a, b] = str.split(' ').map(Number);
    return a + b;
  });

  sumResultArr.forEach((sum, i, arr) => {
    console.log(sum);
  });
};

logAnswer(input);
