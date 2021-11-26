const test = require('../db/notes.json');
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const {
     readFromFile,
     writeToFile,
     readAndAppend,
} = require('../utilities/file-handler');

// notes.get('/', (req, res) =>     
//      res.sendFile(path.join(__dirname, '/public/notes.html')
//           .catch((err) => console.error(err))
// ))

notes.get('/', (req, res) => {
     document.location.replace('/notes')
     readFromFile('./db/notes.json')
          .then((data) => {
               res.json(data)
          })
          .catch((err) => console.error(err))
});

notes.get('/:id', (req, res) => {
     const noteId = req.params.id;
     readFromFile(test)
          .then((data) => JSON.parse(data))
          .then((json) => {
               const item = json.filter((note) => note.id === noteId);
               return item.length > 0 ?
                    res.json(item) :
                    res.json('No note with that ID')
          })
          .catch((err) => console.error(err));
})

module.exports = notes;