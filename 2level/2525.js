const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [h, m] = input[0].split(' ').map((item) => +item);
const t = +input[1];

const getAlarmTime = (h, m) => {
  const calculatedH = h + Math.floor((m + t) / 60);
  const calculatedM = (m + t) % 60;

  if (calculatedH >= 24) {
    return [calculatedH - 24, calculatedM];
  }
  return [calculatedH, calculatedM];
};

console.log(getAlarmTime(h, m).join(' '));
