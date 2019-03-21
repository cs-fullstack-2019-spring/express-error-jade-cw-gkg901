//GRABS EXPRESS MODULE AND HOLDS IT IN A VARIABLE
const express = require('express');

//grabs route handlers
const router = express.Router();

//route renders to exercise3.pug
router.get('/exercise3', (req,res)=>{
    res.render('exercise3')
});

//route uses placeholder. placeholder changes injected text on exercise2 according to if statement
router.get('/exercise2/:num/', (req,res)=>{
    if (parseInt(req.params.num) <=0 ){
        res.render('exercise2', {text:'Less Than'})
    }
    else{
        res.render('exercise2', {text:'Greater Than'})
    }

});

//route uses two placeholders. placholders replace injected text on exercise1.pug
router.get('/exercise1/:placeholder/:placeholder2', (req,res)=>{
    res.render('exercise1', {text1:req.params.placeholder, text2:req.params.placeholder2} )
});


module.exports = router;