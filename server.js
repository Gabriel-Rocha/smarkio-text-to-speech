const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors')


server.set('view engine', 'ejs');

server.use(cors());

server.use(express.static('public'));


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.use('/', require('./routes/routes'));


server.listen(3000, () => {
    console.log("O servidor está rodando!")
});