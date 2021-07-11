//? require the library
const mongoose = require('mongoose');


//? connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db', {useNewUrlParser: true, useUnifiedTopology: true});


//? acquire the connection to check if it is successful.
const db = mongoose.connection;

//Note - js is event driven language


//? on error
db.on('error', console.error.bind(console, 'error connecting to db'));


//? if the connection up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to the DataBase');
});

//or
//db.once('open', () =>  console.log('Successfully connected to the DataBase'));