
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');
const server = require('http').Server(app)
const io = require('socket.io')(server);


app.use(express.static( path.join(__dirname,'public')))

// connect database 
const db = require('./config/db/index.js');
db.connect();

// http logger
app.use(morgan('combined'));

// template handlebar
const hbs = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);

// view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  
    socket.on('Chat message', (msg) => {
      io.emit('Chat message', msg);
    });
  });

// rout init
route(app);


server.listen(port, () => { console.log(`http://localhost:${port}/?q=1`)})