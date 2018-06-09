# rpi-gateopener - HTTPS Server for the raspberry pi to open your gate

The server is listening for a POST request at `https://<raspberrypi>:3000/open` containing HTTP authentication (username and password).

On success it answers with `{open: true}`.

To change the username, password or the path to the SSL files just create a config.json like this:

example-config.json
```
{
  "username": "johndoe",
  "hash": "hash your password with bcrypt.hash",
  "key": "/path/to/key.key",
  "cert": "/path/to/cert.crt"
}
```
