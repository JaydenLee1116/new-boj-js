const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const N = +input[0];
  let result = '';
  for (let i = 1; i <= N; i++) {
    result += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  for (let i = N - 1; i >= 1; i--) {
    result += ' '.repeat(N - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  console.log(result);
};

logAnswer(input);
