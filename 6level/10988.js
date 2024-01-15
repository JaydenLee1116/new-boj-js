const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const noun = input[0];
  const reversedNoun = noun.split('').reverse().join('');
  return noun === reversedNoun ? 1 : 0;
};

console.log(getAnswer(input));
