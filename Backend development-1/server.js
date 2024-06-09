
const express = require('express'); //import express
const app = express();  //initiate instance of express



// start a server
app.listen(3000, () => {
    console.log("Server Started")
})


// get request 
app.get('/', (request,response) =>{
    response.send("Hello Jee");
})

// middleware for post req./ put req
const bodyParser = require('body-parser');
// parsing json data and add it to the req.body
app.use(bodyParser.json());

// post request
app.post('/api/cars', (request, response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Cars submitted successfully");
    console.log("Post request");
})



// mongoose - connects express and mongoDB
// Connection to LocalServer - MongoDB Compass
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ca', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection Established to MongoDB"))
.catch((error) => console.log("Received an error", error.message))