const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const maxLength = Math.max(...input.map(row => row.length));
  const answerArray = new Array(maxLength).fill(0).map(() => new Array());
  const rowCount = input.length;

  for (let i = 0; i < rowCount; i++) {
    const row = input[i].split('');
    for (let j = 0; j < row.length; j++) {
      answerArray[j].push(row[j]);
    }
  }

  return answerArray.map(row => row.join('')).join('');
};

console.log(getAnswer(input));
