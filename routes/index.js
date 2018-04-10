var express = require('express');
var app = express();
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Middleware and Express' });
});

/* GET Super Middleware. */
// router.get('/superMiddleware', (req, res, next) => {
//   console.log('hello middleware');
//   next();
//   // res.render('index', { title: 'Middleware and Express' });
// }, (req, res, next) => {
//   res.send('hello world');
// });

// Envoyer un email

// const nodemailer = require("nodemailer");
// app.use('/askForCookiesRecipe', router);
// router.post('/', askCookie); // handle the route at yourdomain.com/askForCookiesRecipe
//
// function askCookie(req, res){
//   // Not the movie transporter!
//   var transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//           user: 'mauriceandmarcel@gmail.com', // Your email id
//           pass: 'Tom14072010' // Your password
//       }
//   });
//   var mailOptions = {
//     from: 'mauriceandmarcel@gmail.com', // sender address
//     to: 'supergrandma@yopmail.com', // list of receivers
//     subject: 'Ta recette de cookie Mamie !', // Subject line
//     // text: text //, // plaintext body
//     html: "<b>Salut Mamie, tu me file t'a recette de cookie ?</b>" // You can choose to send an HTML body instead
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//         res.json({yo: 'error'});
//     }else{
//         console.log('Message sent: ' + info.response);
//         res.json({yo: info.response});
//     };
//   });
// }

// QUETE Session
// router.get('/session-in', (req, res) => {
//    req.session.song = 'be bop a lula';
//    res.end('Ok');
// });
// router.get('/session-out', (req, res) => {
//    res.send('Le son de cette session est ' + req.session.song)
// });

// QUETE UPLOAD
router.get('/monupload', function(req, res) {
  res.render('form');
});

// mount the router on the app
//app.use('/', router);

module.exports = router;
