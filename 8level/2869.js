const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const [A, B, V] = input[0].split(' ').map(v => Number(v));

  if (V < A) {
    return 1;
  } else {
    if ((V - A) % (A - B) === 0) {
      return Math.floor((V - A) / (A - B)) + 1;
    } else {
      return Math.floor((V - A) / (A - B)) + 2;
    }
  }

  // let s = 0;
  // let day = 1;
  // while (true) {
  //   if (s + A >= V) {
  //     break;
  //   }
  //   s = s + A - B;
  //   day++;
  // }

  // return day;
};

console.log(getAnswer(input));
