// Setup Express App
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;


//Controllers
var heroCtrl = require('./controllers/heroCtrl');
var powerCtrl = require('./controllers/powerCtrl');

//BodyParser
app.use(bodyParser.json());


//Hero Endpoints
app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:heroId', heroCtrl.getHero);
app.post('/api/heroes', heroCtrl.create);
app.put('/api/heroes/:heroId', heroCtrl.update);
app.delete('/api/heroes/:heroId', heroCtrl.delete);


//Hero_Power Endpoints

//Listen
app.listen(port, function() {
  console.log(`Running on port ${port}`)
})



// // Default Express App
// var express = require('express');
// var app = module.exports = express();
// var bodyParser = require('body-parser');
// var port = 8080;

// // Connect Massive
// var massive = require('massive');
// var connectionString = "postgres://postgres:postgres@localhost/massive";
// var massiveInstance = massive.connectSync({connectionString:connectionString})

// app.set('db', massiveInstance);
// var productCtrl = require('./controllers/productCtrl');
// var cartCtrl = require('./controllers/cartCtrl');

// app.use(bodyParser.json());

// app.get('/api/products', productCtrl.getAll)
// app.get('/api/products/:productId', productCtrl.getOne)
// app.post('/api/products', productCtrl.create)
// app.put('/api/products/:productId', productCtrl.update)
// app.delete('/api/products/:productId', productCtrl.delete)


// app.listen(port, function(){
//   console.log("listening on port" + port)
// })
