import fs from 'fs';

console.time('myTimer');

let my_data = fs.readFileSync('./input.txt', 'utf8');

let number = 0;

for (let i = 0; i < my_data.length; i++) {
  if (my_data[i] === '(') {
    number += 1;
  } else if (my_data[i] === ')') {
    number -= 1;
  }
}

console.log(number);

console.timeEnd('myTimer');
