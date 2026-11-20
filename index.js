import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World! I am safoun! This is a server!')
})

// ------------------------------------------------------------------------------ 

const users = [
    { "id": 1, "name": "sultan", "email": "sultan@gmail.com" },
    { "id": 2, "name": "mahmud", "email": "mahmud@gmail.com" },
    { "id": 3, "name": "safoun", "email": "safoun@gmail.com" },
];

app.get('/users', (req, res) => {
    res.send(users)
})



// ------------------------------------------------------------------------------ 
app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashing Dashboard!')
})

app.get('/contact', (req, res) => {
    res.send("Contact me")
})
// ------------------------------------------------------------------------------ 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})