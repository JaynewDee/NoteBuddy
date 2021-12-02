const express = require('express');
const notesRouter = require('./controllers/notes')
const homeRouter = require('./controllers/homeRoute');
const PORT =  process.env.PORT || 80
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

// Links server to route controller that handles all requests related to notes
app.use('/api/notes', notesRouter);

// Links server to route controller that handles serving of static files
app.use('/', homeRouter);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));