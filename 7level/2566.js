const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  let max = 0;
  let maxRow = 0;
  let maxCol = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split(' ').map(num => +num);
    for (let j = 0; j < row.length; j++) {
      if (row[j] >= max) {
        max = row[j];
        maxRow = i + 1;
        maxCol = j + 1;
      }
    }
  }
  console.log(max);
  console.log(maxRow, maxCol);
};

logAnswer(input);
