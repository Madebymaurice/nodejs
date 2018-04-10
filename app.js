const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const Session = require('express-session');
const FileStore = require('session-file-store')(Session);
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//method override QUETE CAN I GET SOME DELETE
app.use(methodOverride('_method'))

// QUETE SESSION
app.use(Session({
    store: new FileStore({
        path: path.join(__dirname, '/tmp'),
        encrypt: true
    }),
    secret: 'Super Secret !',
    resave: true,
    saveUninitialized: true,
    name : 'sessionId'
}));

// QUETE UPLOAD
app.post('/uploaddufichier', upload.array('monfichier'), function (req, res, next) {
  // traitement du formulaire
  for (var i = 0; i < req.files.length; i++) {
    if (req.files[i].mimetype === 'image/png' && req.files[i].size < 3000000){
      fs.rename(req.files[i].path, 'public/images/' + req.files[i].originalname, function(err){
        if (err) {
            res.send('probleme durant le deplacement');
        } else {
            res.send('Fichier uploade avec succes');
        }
      });
    }
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
