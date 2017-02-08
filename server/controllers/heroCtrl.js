// Require DB
var db = require('./../massive')

//Show functions added to the db
console.log(Object.keys(db));

//Init table if it doesn't exist
db.init.createHeroTable([], function(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log('Initialized hero table')
  }
})

//export controller
module.exports = {

  create: function(req, res, next) {
    db.hero.create_hero([
      req.body.name,
      req.body.origin,
      req.body.hometown,
      req.body.imageurl
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send(results);
      }
    })
  },

  getHeroes: function(req, res, next) {
    db.hero.read_heroes([], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        return res.send(results);
      }

    })
  },

  getHero: function(req, res, next) {
    db.hero.read_hero([req.params.heroId], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("No hero found");
      } else {
        return res.send(results[0]);
      }
    })
  },

  update: function(req, res, next) {
    db.hero.update_hero([
        req.params.heroId,
        req.body.name,
        req.body.origin,
        req.body.hometown,
        req.body.imageurl
      ],
      function(err, results) {
        if (err) {
          console.error(err);
          return res.send(err);
        } else {
          return res.send(results);
        }
      })
  },

  delete: function(req, res, next) {
    db.hero.delete_hero([req.params.heroId], function(err, result) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send('Hero ' + req.params.heroId + 'is dead.');
      }
    })
  }

}



// var app = require('./../server');
// var db = app.get('db');

// // console.log(Object.keys(db));
// // console.log(Object.keys(db.init));
// // console.log(Object.keys(db.product));

// db.init.createProductTable(function(err){
//   if(err){
//     return console.log("Error Init Product Table", err);
//   }
// });

// module.exports = {

//   create:function(req, res){

//     db.product.create_product(
//       [req.body.name,
//       req.body.description,
//       req.body.price,
//       req.body.imageUrl],
//       function(err, results){
//         if(err){
//           console.error(err);
//           return res.send(err);
//         }
//         console.log(results);
//         res.send(results);
//       }
//     )
//   },
//   getOne:function(req, res){
//     db.product.read_product([req.params.productId],
//     function(err, results){
//       if (err){
//         console.error(err);
//         return res.send(err);
//       }
//       console.log(results);
//       res.send(results[0]);
//     })
//   },
//   getAll:function(req, res){
//     db.product.read_products([],function(err, results){
//       if (err){
//         console.error(err);
//         return res.send(err);
//       }
//       console.log(results);
//       res.send(results);
//     })
//   },
//   update:function(req, res){
//     db.product.update_product([
//       req.params.productId,
//       req.body.name,
//       req.body.description,
//       req.body.price,
//       req.body.imageUrl
//     ],
//     function(err, results){
//       if(err){
//         console.error(err);
//         return res.send(err);
//       }
//       console.log(results);
//       res.send(results[0]);
//     })
//   },
//   delete:function(req, res){
//     db.product.delete_product([req.params.productId], function(err, result){
//       if (err){
//         console.error(err);
//         return res.send(err);
//       }
//       res.send("Product " +req.params.productId + " deleted.");
//     })
//   }

// }