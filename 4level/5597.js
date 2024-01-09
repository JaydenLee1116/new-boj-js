const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const logAnswer = input => {
  const studentNumbers = Array(30).fill(0).map((_, i) => i + 1);
  const completedStudentNumbers = input.map(Number);
  const uncompletedStudentNumbers = studentNumbers.filter(studentNumber => !completedStudentNumbers.includes(studentNumber));
  console.log(uncompletedStudentNumbers.join('\n'));
}

logAnswer(input);