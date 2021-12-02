const path = require('path')
const fs = require('fs');
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const {
     readFromFile,
     writeToFile,
     readAndAppend,
} = require('../utilities/file-handler');

notes.get('/', (req, res) => {
     let notesDB = fs.readFileSync(path.join(__dirname, '../db/db.json'));
     res.send(notesDB);
});

notes.post('/', (req, res) => {

     if (req.body) {
          const {title, text} = req.body;
          const newNote = {
               title,
               text,
               id: uuidv4(),
          };

          readAndAppend(newNote, './db/db.json');
          res.json('Note added successfully!')
     } else {
          console.error('Failed to add new note =(')
     }
})

notes.delete('/:id', (req, res) => {
     const noteId = req.params.id;
     readFromFile('./db/db.json')
          .then((data) => JSON.parse(data))
          .then((json) => {
               const update = json.filter((note) => note.id !== noteId)
               writeToFile('./db/db.json', update);
               res.json(`Note ${noteId} successfully deleted!`)
          });
})


module.exports = notes;