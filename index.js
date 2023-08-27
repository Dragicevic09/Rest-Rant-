const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Handling 404 Page for all routes
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

// Using environment variable for port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
