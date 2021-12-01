const express = require('express');
const notesRouter = require('./notes');
const router = express.Router();

router.use('/notes', notesRouter);

router.get('/')

module.exports = router;