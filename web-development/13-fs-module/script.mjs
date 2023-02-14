import fs from 'fs';

// This is a Async function when it is done, we can get the results
fs.readFile('./text.txt', (err, data) => {
  if (err) {
    console.log('erroooooorr!!!');
  }
  console.log('Async', data.toString('utf8'));
})

// This is a Sync function so it says wait until I'm done
const file = fs.readFileSync('./text.txt');
console.log('Sync', file.toString());

// APPEND
// fs.appendFile('./text.txt', ' This is so cooool!', err => {
//   if (err){
//     console.log(err);
//   }
// })

// WRITE
// fs.writeFile('bye.txt', 'I should say goodbye to you :(', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// DELETE
fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err);
  }
  console.log('Inception');
})