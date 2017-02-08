














// var app = require('./../server');
// var db = app.get('db');

// db.init.createCartTable(function(err){
//   if(err){
//     return console.log("Error Init Order Table", err);
//   }
// });

// module.exports = {

//   create:function(req, res){

//     db.cart.create_cart(
//       [req.body.name],
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
//     db.cart.read_cart([req.params.cartId],
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
//     db.cart.read_carts([],function(err, results){
//       if (err){
//         console.error(err);
//         return res.send(err);
//       }
//       console.log(results);
//       res.send(results);
//     })
//   },
//   update:function(req, res){
//     db.cart.update_cart([
//       req.params.cartId,
//       req.body.name
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
//     db.cart.delete_cart([req.params.cartId], function(err, result){
//       if (err){
//         console.error(err);
//         return res.send(err);
//       }
//       res.send("Cart " +req.params.cartId + " deleted.");
//     })
//   }

// }
