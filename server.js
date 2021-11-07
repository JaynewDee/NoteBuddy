const express = require('express');
const path = require('path');

const router = require('./routes/indexRoute.js');
const app = express();
const PORT = process.env.port || 3001;
const {audit} = require('./middleware/audit');
app.use(audit);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('router', router)

app.use(express.static('public'));


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));