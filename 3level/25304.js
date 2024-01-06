const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const X = +input[0];
const N = +input[1];
const items = input.slice(2);

const isSamePrice = (X, N, items) => {
  const total = items.reduce((acc, cur) => {
    const [price, count] = cur.split(' ').map(Number);
    return acc + price * count;
  }, 0);
  return X === total;
};

console.log(isSamePrice(X, N, items) ? 'Yes' : 'No');