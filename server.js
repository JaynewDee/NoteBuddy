const express = require('express');
const path = require('path');
const notesRouter = require('./controllers/notes')
const home = require('./controllers/homeRoute');
const PORT = process.env.port || 3001;
const app = express();
const {
     audit
} = require('./middleware/audit');
app.use(audit);

app.use(express.json());
app.use(express.urlencoded({
     extended: true
}));
app.use(express.static('public'));

app.use('/home', home);
app.use('/notes', notesRouter);

app.get('/', (req, res) =>
     res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));