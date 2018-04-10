var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET pour afficher le formulaire de update-user.pug */
router.get('/:name([a-zA-Z]+)', function(req, res) {
  res.render('update-user', {nom: req.params.name});
});

/* PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom] */
router.put('/:name([a-zA-Z]+)', function(req, res) {
  res.send("The new name is" + req.params.name);
});

/* GET pour afficher le formulaire de delete-user.pug */
router.get('/:id(\\d+)', function(req, res) {
  res.render('delete-user', {number : req.params.id});
});

/* DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro] */
router.delete('/:id(\\d+)', function(req, res) {
  // suppression de la ressource
  res.send("No more user with id" + req.params.id);
});


module.exports = router;
