const express = require('express');
const path = require('path');

const api = require('./controllers/homeRoute.js');
const PORT = process.env.port || 3001;
const app = express();
const {audit} = require('./middleware/audit');
app.use(audit);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api)

app.use(express.static('public'));
app.get('/api', (req, res) => {
     res.sendFile(path.join(__dirname, '/public/notes.html'));
})
app.get('/home', (req, res) =>
     res.sendFile(path.join(__dirname, '/public/index.html')))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));