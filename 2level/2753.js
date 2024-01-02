const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const year = +input[0];

const isLeapYear = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return 1;
  } else {
    return 0;
  }
};

console.log(isLeapYear(year));
