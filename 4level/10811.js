const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const [N, M] = input[0].split(' ').map(Number);
  const reverseInfo = input.slice(1).map(str => str.split(' ').map(Number));
  const resultArr = Array(N)
    .fill(0)
    .map((_, i) => i + 1);
  reverseInfo.forEach(reverseInfo => {
    const firstIndex = reverseInfo[0] - 1;
    const lastIndex = reverseInfo[1] - 1;
    resultArr.splice(
      firstIndex,
      lastIndex - firstIndex + 1,
      ...resultArr.slice(firstIndex, lastIndex + 1).reverse()
    );
  });
  console.log(resultArr.join(' '));
};

logAnswer(input);
