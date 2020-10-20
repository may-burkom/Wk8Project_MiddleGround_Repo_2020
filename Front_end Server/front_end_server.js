const express = require('express')
const app = express()
const port = 8080
var path = require('path');

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/welcome.html'));
});

app.get('/buyer', function(req, res) {
    res.sendFile(path.join(__dirname + '/buyer.html'));
});

app.get('/seller', function(req, res) {
    res.sendFile(path.join(__dirname + '/seller.html'));
});

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})