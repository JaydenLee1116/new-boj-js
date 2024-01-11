const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const logAnswer = input => {
  const S = input[0];

  [...ALPHABET].forEach(alphabet => {
    console.log(S.indexOf(alphabet));
  });
};

logAnswer(input);