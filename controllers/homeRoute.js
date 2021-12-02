const path = require('path');
const router = require('express').Router();

// Route which renders the notes.html when user clicks 'get started' button on homepage
router.get('/notes', (req, res) =>
     res.sendFile(path.join(__dirname, '../public/notes.html'))  
)

// Wildcard route which renders public index.html should no other routes match the requested URL
router.get('*', (req, res) =>
     res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;