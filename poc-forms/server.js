const express = require('express');
const jsonServer = require('json-server');
const app = express();
const cors = require('cors');

const PORT = 3500;

app.use(cors());
app.use('/', jsonServer.router('items.json'));

app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

app.listen(PORT, console.log('Running on port: ' + PORT));