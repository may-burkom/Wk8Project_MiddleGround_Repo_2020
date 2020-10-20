const express = require('express')
const cors = require('cors')
const multer = require('multer')
const data = require('./data')

const app = express()
const port = 3000
const upload = multer()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(upload.array()); 
app.use(express.json())

app.get('/buyer', function(req, res) {
    res.send(data.items)
})

// app.get('/seller', function(req, res) {
//     res.send(data.items)
// })

app.post('/store-item', function(req, res) {
    console.log("item upload route")
    console.log(req.body)
})
app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
}) 