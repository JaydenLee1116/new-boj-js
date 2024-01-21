const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  let result = 0;
  const nouns = input.slice(1);
  nouns.forEach(noun => {
    let count = 0;
    let words = [];
    [...noun].forEach((word, i) => {
      if (words.includes(word) && words[i - 1] !== word) {
        count += 1;
      }
      words.push(word);
    });

    if (count === 0) {
      result += 1;
    }
  });
  return result;
};

console.log(getAnswer(input));
