var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mg;


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Pang!'));
app.get('/food', (req, res) => { mg.collection('menus').find().toArray().then(r=>res.json(r))
}
);

if(!mg)mongodb.MongoClient.connect('mongodb://user:password@127.0.0.1:27017/coyf/?authSource=admin', {useNewUrlParser:true})
    .then(c => mg = c.db('coyf'))
    .catch(e => {mg = null; console.log(e);});

app.listen(3000, () => console.log('Example app listening on port 3000!'));