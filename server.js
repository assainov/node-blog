const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'), {
    extensions: ['html', 'css'],
});

//  Telling hbs we're going to use partials
hbs.registerPartials(__dirname + '/views/partials');

//  Telling the express we're going to use hbs for template engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});
app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.listen(4000, () => {
    console.log('Server is running at port 4000');
});