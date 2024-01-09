const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const [N, M] = input[0].split(' ').map(Number);
  const changeBallNumbers = input.slice(1).map(str => str.split(' ').map(Number));
  const resultArr = Array(N)
    .fill(0)
    .map((_, i) => i + 1);
  changeBallNumbers.forEach(changeBallNumber => {
    const firstIndex = changeBallNumber[0] - 1;
    const lastIndex = changeBallNumber[1] - 1;
    const temp = resultArr[firstIndex];
    resultArr[firstIndex] = resultArr[lastIndex];
    resultArr[lastIndex] = temp;
  });
  console.log(resultArr.join(' '));
};

logAnswer(input);
