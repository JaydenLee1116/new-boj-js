const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const N = Number(input[0]);
  const scores = input[1].split(' ').map(Number);
  const max = Math.max(...scores);
  const newScores = scores.map(score => (score / max) * 100);
  const avg = newScores.reduce((acc, cur) => acc + cur, 0) / N;
  console.log(avg);
};

logAnswer(input);
