const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const TIME_TO_DIAL = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

const getAnswer = input => {
  const alphabets = input[0].split('');
  return alphabets.reduce((acc, cur) => {
    for (const key in TIME_TO_DIAL) {
      if (key.includes(cur)) {
        acc += TIME_TO_DIAL[key];
      }
    }
    return acc;
  }, 0);
};

console.log(getAnswer(input));
