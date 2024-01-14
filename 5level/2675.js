const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const info = input.slice(1).map(v => v.split(' '));
  info.forEach(v => {
    const [R, S] = v;
    let result = '';
    for (let i = 0; i < S.length; i++) {
      result += S[i].repeat(R);
    }
    console.log(result);
  });
};

logAnswer(input);
