const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

//Rutas
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/users');
const nosotrosRouter = require('./routes/nosotrosRouter');
const contactoRouter = require('./routes/contactoRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middelware: son funciones por las que pasan las peticiones http
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Utilizamos y configuramos las session de express
app.use(session({
    secret: 'mi secreto',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) =>{
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
  }
  return next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);


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
