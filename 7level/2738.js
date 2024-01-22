const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const [N, M] = input[0].split(' ').map(num => +num);
  const firstMatrix = input.slice(1, N + 1).map(row => row.split(' ').map(num => +num));
  const secondMatrix = input.slice(N + 1).map(row => row.split(' ').map(num => +num));

  const result = [];

  for (let i = 0; i < N; i++) {
    let temp = [];
    for (let j = 0; j < M; j++) {
      const firstNum = +firstMatrix[i][j];
      const secondNum = +secondMatrix[i][j];
      temp.push(firstNum + secondNum);
    }
    result.push(temp);
  }

  return result.map(row => row.join(' ')).join('\n');
};

console.log(getAnswer(input));
