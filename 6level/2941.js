const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const CROATIA_ALPHABET = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const getAnswer = input => {
  let noun = input[0];
  CROATIA_ALPHABET.forEach(alphabet => {
    noun = noun.replaceAll(alphabet, 0);
  });
  return noun.length;
};

console.log(getAnswer(input));
