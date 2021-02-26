var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');
var ShopModel = require('../models/shops');
var CommentModel = require('../models/comments');
var AppointmentModel = require('../models/appointments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 7 req.body :radio (salon ou dom, require) lieu, date et heure(calendriers), prestations (liste déroulante) et package (validation de l'overlay de description), les pictos, le rating
utiliser pour page accueil, filtres salon (map et liste)
--> reducer des données du filtre entre la liste, la map et le detail coiffeur qui servira à remplir le fetch à la bdd
*/
router.post('/search', function(req, res, next) {

  let type = {$exists: true}
  let ou = {$exists: true}
  let quand = {$exists: true}
  let quoi = {$exists: true}
  let package = {$exists: true}
  let picto = {$exists: true}
  let rating = {$exists: true}

  req.body.type ? type = req.body.type : null;
  req.body.ou ? ou = req.body.ou : null;
  req.body.quand ? quand = req.body.quand : null;
  req.body.quoi ? quoi = req.body.quoi : null;
  req.body.package ? package = req.body.package : null;
  req.body.picto ? picto = req.body.picto : null;
  req.body.rating ? rating = req.body.rating : null;

  

});







module.exports = router;
