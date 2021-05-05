const express = require('express');
const path = require ('path');
const app = express();

app.use((req, res, next) => {
    const date = new Date();

    const dd=date.getDay();

    const hh=date.getHours();
    if ((hh<9 || hh>17 ) && (dd==1 || dd==0)){
        res.send("Closed");
    }
    else {
        next();
    }

//  if ((hh<9 || hh>17) && (dd=1 || dd=0))  {

//     console.log("Closed");
//  }
//    else {
//     next();  
//    }
   
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'public' , 'home.html'));
});
app.get('/OurServices', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'services.html'))
  });
app.get('/Contactus', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'contact.html'))
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));