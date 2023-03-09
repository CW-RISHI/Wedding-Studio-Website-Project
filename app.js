const express = require('express');
const path = require('path');
const app = express();
const port = 80;


// EXPRESS SPECIFIC STUFF (for serving static files)
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine' , 'pug'); // set the template engine as pug
app.set('views' , path.join(__dirname , 'views')); // set the views directory

// ENDPOINTS
app.get('/Home' , (req , res)=>{
    const params = {};
    res.status(200).render('home.pug' , params);
});
app.get('/Booking' , (req , res)=>{
    const params = {};
    res.status(200).render('Booking.pug' , params);
});
app.get('/Services' , (req , res)=>{
    const params = {};
    res.status(200).render('Services.pug' , params);
});
app.get('/Gallery' , (req , res)=>{
    const params = {};
    res.status(200).render('Gallery.pug' , params);
});
app.get('/Team' , (req , res)=>{
    const params = {};
    res.status(200).render('Team.pug' , params);
});

// START THE SERVER
app.listen(port , ()=>{
    console.log(`The application started successfully at port ${port}`);
});