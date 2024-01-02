const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [h, m] = input[0].split(' ').map((item) => +item);

const getAlarmTime = (h, m) => {
  if (m >= 45) {
    return `${h} ${m - 45}`;
  } else {
    if (h === 0) {
      return `23 ${m + 15}`;
    } else {
      return `${h - 1} ${m + 15}`;
    }
  }
}

console.log(getAlarmTime(h, m));