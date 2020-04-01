const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const port = 5000;

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const title = 'welcome to vidjot ';
    res.render('index',{title:title});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});