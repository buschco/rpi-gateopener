var express = require('express')
var https = require('https')
var fs = require('fs')
var app = express('express')
var basicAuth = require('express-basic-auth')
var gpio = require('rpi-gpio')
var bcrypt = require('bcrypt')

var config = require('./config')

app.use(basicAuth( { authorizer: myAuthorizer } ))

function myAuthorizer(username, password) {
  return bcrypt.compareSync(password, config.hash)&&username==config.username
}
var sslOptions;
gpio.destroy()
var sslOptions = {
  key: fs.readFileSync(config.key),
  cert: fs.readFileSync(config.cert),
}

app.post('/open', (req, res) => {
  gpio.setup(7, gpio.DIR_OUT)
  gpio.setup(11, gpio.DIR_OUT)
    setTimeout(() => {
    gpio.destroy()
  }, 2000)
  res.json({open: true})
})

/*app.post('/close', function (req, res) {
  gpio.write(7, false, function(err) {
      if (err) throw err;
  });
  res.json({open: true});
});*/

console.log('running');
https.createServer(sslOptions,app).listen(process.env.PORT ||3000);
