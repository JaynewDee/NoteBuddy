const test = require('../db/test.json')
const notes = require('express').Router();
const {
     v4: uuidv4
} = require('uuid');
const {
     readFromFile,
     writeToFile,
     readAndAppend,
} = require('../utilities/file-handler');

notes.get('/', async (req, res) => {
     readFromFile('./db/test.json')
          .then((data) => {
               res.json(JSON.parse(data))
          })
          .catch((err) => console.error(err))
     res.sendFile(path.join(__dirname, '/public/notes.html'))
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
})

notes.get('/api/notes', (req, res) => {
     res.redirect('../')
})
module.exports = notes;