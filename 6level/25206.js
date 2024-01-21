const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const SCORE_TABLE = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

const getAnswer = input => {
  let totalScore = 0;
  let totalCredit = 0;
  input.forEach((scoreInfo, i) => {
    const [name, score, credit] = scoreInfo.split(' ');
    if (credit === 'P') {
      return;
    }
    totalScore += SCORE_TABLE[credit] * Number(score);
    totalCredit += Number(score);
  });
  return totalScore / totalCredit;
};

console.log(getAnswer(input));
