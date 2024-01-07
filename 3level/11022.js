const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const numbersArr = input.slice(1).map(str => {
    const [a, b] = str.split(' ').map(Number);
    return [a, b, a + b]
  });
  numbersArr.forEach((nums, i) => {
    console.log(`Case #${i + 1}: ${nums[0]} + ${nums[1]} = ${nums[2]}`);
  });
};

logAnswer(input);
