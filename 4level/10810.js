const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const [N, M] = input[0].split(' ').map(Number);
  const ballInfoArr = input.slice(1).map(str => str.split(' ').map(Number));
  const resultArr = Array(N).fill(0);
  ballInfoArr.forEach(ballInfo => {
    const [start, end, ballNum] = ballInfo;
    for (let i = start - 1; i < end; i++) {
      resultArr[i] = ballNum;
    }
  });
  console.log(resultArr.join(' '));
};

logAnswer(input);
