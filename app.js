const express=require('express');
const personRoute=require('./routes/person');

const app=express();







app.use(express.json());
app.use('/person',personRoute);


app.listen(3000,()=>{
    console.log("Server Created...");
})