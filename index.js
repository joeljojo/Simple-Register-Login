const express = require('express');

const database = require('./Config/database');
const app = express();

const PORT = 3001;

//GET
app.get('/',(req, res) => {
    console.log('Get request hit');
    res.send('Login');
});

//Register
app.post('/',(req, res) =>{
    console.log('Posting');
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});