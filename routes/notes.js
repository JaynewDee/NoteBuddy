const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
     readFromFile,
     writeToFile,
     readAndAppend,
} = require('../utilities/file-handler');

notes.get('/', (req, res) => {
     try {
     readFromFile('./db/test.json').then((data) => res.json(data));
     } catch(err) {
          console.error(err);
     }
})

notes.get('/:id', (req, res) => {
     const noteId = req.params.id;
     readFromFile('./db/test.json')
          .then((data) => JSON.parse(data))
          .then((json) => {
               const item = json.filter((note) => note.id === noteId);
               return item.length > 0 
                    ? res.json(item) 
                    : res.json('No note with that ID')
          })
})

module.exports = notes;