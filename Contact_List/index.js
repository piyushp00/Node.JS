//code order -> 1.ibraries - 2.different files and properties- 3.middleware
const express = require('express');
//library for storing views(comes in built)
const path = require('path');
const port = 8000;

const app = express();

//setting up template engine
app.set('view engine', 'ejs');

//store views/templates
app.set('views', path.join(__dirname, 'views'));

//controller
app.get('/', function (req, res) {
    //console.log(req);
    /*console.log(__dirname); //it displays the directory from where server is started.
    res.send('<h1>Cool, it is running! or is it?</h1>');*/

    return res.render('home', {
        title: 'Contacts List'
    });
});

app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: 'Let us play with ejs'
    });
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('Yup! My Express Server is running on Port', port);
});