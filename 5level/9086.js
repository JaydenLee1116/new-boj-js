const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const nouns = input.slice(1);

  nouns.forEach(noun => {
    console.log(noun[0] + noun[noun.length - 1]);
  });
};

logAnswer(input);
