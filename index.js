
const express = require('express')
const app = express()
const port = 4000

app.use('/*test',express.static('images'));
app.use('/*audio',express.static('public'));

app.get('/*test',function (req,res){
  res.send('Test1.mp3')
})

app.get('/*audio',function(req,res){
  res.send('TEST2.mp3')
})                             

//Use multiple callback function
  app.get('/rohan', function (req, res) {
    res.send('hello from rohan!')
  })

  app.get('/rohan/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('hello from rohan B!')
  })
  var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('hello from C!')
  }
  
  app.get('/rohan/c', [cb0, cb1, cb2])


app.listen(port, () => {
  console.log('app listening at http://localhost:${4000}')
})
