const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const S = input[0];
  const i = +input[1];

  console.log(S[i - 1]);
};

logAnswer(input);
