const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
     fs.writeFile(destination, JSON.stringify(content, null, 4), 
     (err) =>
     err ? console.error(err) : console.info(`\nData written to ${destination}`));

const readAndAppend = (content, file) => { 
     try {
     fs.readFile(file, 'utf8', (err, data) => {
     const parsedData = JSON.parse(data);
     parsedData.push(content);
     writeToFile(file, parsedData);
     })}
     catch (err) {
          console.error(err);
     }
}
module.exports = {readFromFile, writeToFile, readAndAppend}