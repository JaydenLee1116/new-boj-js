const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = +input[0];

if (a >= 90) {
  console.log('A');
} else if (a >= 80) {
  console.log('B');
} else if (a >= 70) {
  console.log('C');
} else if (a >= 60) {
  console.log('D');
} else {
  console.log('F');
}
