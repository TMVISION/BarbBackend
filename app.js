var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config({path: __dirname + '/.env' })
var app = express();

// CORS
app.use(cors({origin:'*'}));
app.options('*', cors());

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');
var unidadesRouter = require('./routes/barbearia');
var clientesRouter = require('./routes/clientes');
var funcionariosRouter = require('./routes/funcionarios');
var servicosRouter = require('./routes/servicos');
var reservasRouter = require('./routes/reservas_routes');
var galeriaRouter = require('./routes/galeria');





// view engine setup'
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ass', apiRouter);
app.use('/users', usersRouter);
app.use('/api/unidades', unidadesRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/funcionarios', funcionariosRouter);
app.use('/api/reservas', reservasRouter);
app.use('/api/servicos', servicosRouter);
app.use('/api/galeria', galeriaRouter);

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
