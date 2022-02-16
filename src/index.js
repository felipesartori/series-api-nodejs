const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/authcontroller')(app);
require('./controllers/projectController')(app);

app.listen(3000);
console.log("Aplicação está em execução...");

// instanciar o server
// node scr/index.js