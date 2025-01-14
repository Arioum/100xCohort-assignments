// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.writeFile('a.txt', ' Hello from js ', { flag: 'a' }, (err) => {
  if (err) throw err;
});

fs.readFile('a.txt', 'utf-8', (err, data) => {
  console.log(data);
});
