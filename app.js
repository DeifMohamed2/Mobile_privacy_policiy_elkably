const express = require('express');
const path = require('path');

const app = express();
const PORT = 9037;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the privacy policy
app.get('/', (req, res) => {
    res.render('privacy_policy');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

