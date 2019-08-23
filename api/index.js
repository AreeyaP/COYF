var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mg;


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Pang!'));
app.get('/food', (req, res) => { mg.collection('menus').find().toArray().then(r=>res.json(r))});
app.get('/food/name', (req, res) => { console.log("hello",req.query.name); mg.collection('menus').find({name:req.query.name}).toArray().then(r=>res.json(r))});
app.get('/food/ingredient', (req, res) => { console.log("hello",req.query.ingredient); mg.collection('menus').find({ingredient:{$elemMatch:{name:req.query.ingredient}}}).toArray().then(r=>res.json(r))});
app.get('/food/type', (req, res) => { console.log("hello",req.query.type); mg.collection('menus').find({type:req.query.type}).toArray().then(r=>res.json(r))});
app.get('/food/quant', (req, res) => { console.log("hello",req.query.quant); mg.collection('menus').find({quant:req.query.quant}).toArray().then(r=>res.json(r))});
app.get('/food/ingredients', (req, res) => { console.log("hello", req.query.ingredients); 
    var ingredients = JSON.parse(req.query.ingredients);
    mg.collection('menus').find({ingredient:{$elemMatch : {name :{$in:ingredients}}}}).toArray().then(r=>res.json(r))}
  );

if(!mg)mongodb.MongoClient.connect('mongodb://user:password@127.0.0.1:27017/coyf/?authSource=admin', {useNewUrlParser:true})
    .then(c => mg = c.db('coyf'))
    .catch(e => {mg = null; console.log(e);});

app.listen(3000, () => console.log('Example app listening on port 3000!'));