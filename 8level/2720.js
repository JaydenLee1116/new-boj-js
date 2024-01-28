const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const MONEY_UNIT = [25, 10, 5, 1];

const logAnswer = input => {
  input.slice(1).forEach(price => {
    const counts = [];
    MONEY_UNIT.reduce((acc, cur) => {
      counts.push(parseInt(acc / cur));
      return acc % cur;
    }, price);

    console.log(counts.join(' '));
  });
};

logAnswer(input);
