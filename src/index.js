
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static( path.join(__dirname,'public')))
// http logger
app.use(morgan('combined'));
// template handlebar
const hbs = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);

// view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => { console.log(`http://localhost:${port}/`)})