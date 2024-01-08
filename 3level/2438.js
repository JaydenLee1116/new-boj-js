const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const STAR = '*';

const writeStar = input => {
  const N = +input[0];
  let answer = '';
  for (let i = 1; i <= N; i++) {
    answer += STAR.repeat(i) + '\n';
  }
  console.log(answer);
};

writeStar(input);