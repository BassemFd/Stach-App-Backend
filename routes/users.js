var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* route sign-up, création d'un compte client : 
  firstName
  lastName
  phoneNumber
  mail
  password
  favoris : si le reducer des favoris est rempli, les enregistrer en base de données
  status (remmplir dans la route en user par le dev)
  token (remplir dans la route par le dev)
  
  voir comment mettre en place google et facebook
*/
router.post('/signUp', function(req, res, next) {
  /* création du token et du status en plus des input rempli par le user */
  
  })

/* route sign-in 
 mail
 password 
 token (récupéré dans la route par le dev)
*/
router.post('signIn', function(req, res, next) {
  
});

/* route de validation de la base de données 
  -> reducer stockant toutes les infos du rdv choisis (reducer créé au moment de la validation du rdv sur la page détail coiffeur)  
*/
router.post('bookAppointment', function(req, res, next) {
  
});

/* route stripe */

/* route à l'entrée de la page 'communiquer avec mon coiffeur' accessible juste après la validation ET depuis la page rdv à venir, pensez à ajouter un bouton ignorer */
router.get('/myDetails', function(req, res, next){
  // récupère via le token gender, hairType, hairLength, image
})

/* route au bouton validation de la page 'communiquer avec mon coiffeur, envoie les infos au coiffeur. il y a un bouton ignore qui n'envoie rien. la validation renvoie vers la page profil*/
router.post('/myDetails', function(req, res, next) {
  // enregistrement via le token du user des modif sur la page de communication avec le coiffeur du hairType, hairLength, 
});

/* route profil: depuis la validation de la com avec coiffeur et depuis le drawer si connecté*/
router.get('myProfile', function(req, res, next){
  // récupère firstname, lastname, loyaltyPoints, rdv futurs, rdv passés 
  // rdv passés : il y a un bouton qui amène vers comment
  // rdv futurs : il y a un bouton qui amène vers myDetails
});

/* route en post depuis le profil : un bouton sur chaque rdv passés, ouvre un overlay avec un input pour le commentaire, un input pour la note */
router.post('comment', function(req, res, next){
 // récupère le token du user, l'id du salon de coiffure, le comment et la note
 // une fois le commentaire écrit, le bouton disparait
});





module.exports = router;
