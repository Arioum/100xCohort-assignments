// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman

// After the program runs, the output should be
// hello world my name is raman

const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let formattedData = '';
  let prevIndex = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i] === ' ' && prevIndex === ' ') {
      continue;
    } else if (data[i] === ' ') {
      formattedData += data[i];
      prevIndex = data[i];
    } else {
      formattedData += data[i];
      prevIndex = data[i];
    }
  }
  console.log(formattedData);
  fs.writeFile('a.txt', formattedData, (err) => {
    if (err) throw err;
  });
});
