const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 0: 1 => 1
// 1: 2, 3, 4, 5, 6 ,7 => 6 * 1
// 2: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 => 6 * 2
// 3: 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, ... =? 6 * 2 * 2
// 4 => 6 * 2 * 2 * 2
const getAnswer = input => {
  const N = +input[0];

  if (N === 1) {
    return 1;
  }

  let count = 1;
  let i = 1;
  let num = 1;
  while (true) {
    num += 6 * i;
    count++;
    if (N <= num) {
      return count;
    }
    i++;
  }
};

console.log(getAnswer(input));
