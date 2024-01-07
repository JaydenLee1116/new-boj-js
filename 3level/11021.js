const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const sumResults = input.slice(1).map(str => {
    const [a, b] = str.split(' ').map(Number);
    return a + b;
  });
  sumResults.forEach((result, i) => {
    console.log(`Case #${i + 1}: ${result}`);
  });
};

logAnswer(input);
