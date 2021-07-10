//code order -> 1.ibraries - 2.different files and properties- 3.middleware
const express = require("express");
//library for storing views(comes in built)
const path = require("path");
const port = 8000;

//for setting up mongoose we need config
const db = require('./config/mongoose');

//fire express
const app = express();

//setting up template engine
app.set("view engine", "ejs");
//store views/templates
app.set("views", path.join(__dirname, "views"));

//parser(middleware)
app.use(express.urlencoded());
app.use(express.static("assets"));

/*
//our own middleware
//middleware1
app.use(function(req, res, next) {
    //console.log('middleware 1 called');
    req.myName = "Piyush"
    next();
});

//middleware2
app.use(function(req, res, next) {
    //console.log('middleware 2 called');
    console.log('my name from mw 2', req.myName)
    next();
});
*/

//Create Contacts List
var contactsList = [
  {
    name: "Piyush",
    phone: "7275740356",
  },
  {
    name: "Arpan ",
    phone: "9857430451",
  },
  {
    name: "Tony Stark",
    phone: "0123456789",
  },
  {
    name: "Darth Vader",
    phone: "9876543210",
  },
  {
    name: "Luke Skywalker",
    phone: "9988888899",
  },
];

//Controller-1 (rendering home page)
app.get("/", function (req, res) {
  //console.log(req);
  /*console.log(__dirname); //it displays the directory from where server is started.
    res.send('<h1>Cool, it is running! or is it?</h1>');*/

  return res.render("home", {
    title: "Contacts List",
    contact_list: contactsList,
  });
});

//Controller-2 (rendering practice page)
app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Let us play with ejs", //context is being passes to views
  });
});

//Controller-3 (create contact)
app.post("/create-contact", function (req, res) {
  console.log(req.body);
  /*contactsList.push({
        name: req.body.name,
        phone: req.body.phone
    });*/

  //or we can write
  contactsList.push(req.body);
  //return res.redirect('/');
  //for coming to same page we can also write as below
  return res.redirect("back");
});

//Controller-4 (delete contact)
app.get("/delete-contact/", function (req, res) {
  //with params
  //let phone = req.params.phone;
  //with query params
  console.log(req.query);
  //get the query from the url
  let phone = req.query.phone;

  let contactIndex = contactsList.findIndex(
    (contact) => contact.phone == phone
  );

  if (contactIndex != -1) {
    contactsList.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }

  console.log("Yup! My Express Server is running on Port", port);
});
