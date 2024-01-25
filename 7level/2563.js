const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getAnswer = input => {
  const paper = new Array(100).fill(0).map(() => new Array(100).fill(0));
  const count = input[0];
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    for (let j = x; j < x + 10; j++) {
      for (let k = y; k < y + 10; k++) {
        if (paper[j][k] === 0) {
          paper[j][k] = 1;
          answer++;
        }
      }
    }
  }

  return answer;
};

console.log(getAnswer(input));

/**
 * 개인적으로 엔지니어로서의 사고와 수학적인 사고가 구분되는 문제라고 생각!!!
 * 이 문제를 나처럼 수학적으로만 접근하면 풀 수 없다.
 * 문제를 작게 쪼개서 생각해보고, 그 과정에서 자연스럽게 어떤 자료구조를 사용해야할지 생각해보자.
 */
