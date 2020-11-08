'use strict';
// normally use 'req' and 'res' as shorthand parameter names rather than 'request' and 'response'

// application constants
// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // programmatic variable directs the server file to use the app hosting service's designated port - if none is provided, it will default to 3000 (e.g. in a local development context)

// Allows Express to serve static-type files (e.g. images, text, HTML, CSS, JS)
app.use(express.static('./public'));

// SERVER route - simply serves webpage content to incoming traffic
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// API Route - provides data that can be used for manipulating an application
app.get('/api/main_directory/subsection', (request, response) => {
  response.json({ subsectionObject: { msg: 'here is the reqeusted data' } });
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

// establishes app access for incoming traffic on the designated port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));