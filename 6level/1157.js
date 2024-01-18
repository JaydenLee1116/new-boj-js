const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getAnswer = input => {
  const word = input[0].toUpperCase();
  const alphabetCount = new Array(26).fill(0);
  let max = 0;
  let answer = '';

  for (let i = 0; i < word.length; i++) {
    const index = ALPHABET.indexOf(word[i]);
    alphabetCount[index] += 1;
    if (alphabetCount[index] > max) {
      max = alphabetCount[index];
      answer = word[i];
    } else if (alphabetCount[index] === max) {
      answer = '?';
    }
  }

  return answer;
};

console.log(getAnswer(input));
