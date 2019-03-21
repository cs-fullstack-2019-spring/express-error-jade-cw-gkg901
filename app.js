
//GRABS EXPRESS MODULE AND HOLDS IT IN A VARIABLE
const express = require('express');

//MAKES EXPRESS MODULE ACTIVE AND ABLE TO USE FUNCTIONS ---MY INTERPRETATION OF IT ANYWAY :/
const app =express();

//allows express to serve static files from PUBLIC directory
app.use(express.static('public'));
app.set('view engine', 'pug');

//imports routes from index.js and allows express to use them
let routes = require('./routes/index');
app.use('/',routes);

//opens port 8000
app.listen(8000, ()=>{
    console.log('server running on port 8000')
});

//404 message
app.get('*', function(req, res){
    res.send('what??? 404, wrong turn!!', 404);
});