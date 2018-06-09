# HTTPS Server for the raspberry pi to open your gate

The server is listening for a POST request at `https://<raspberrypi>:3000/open` containing HTTP authentication (username and password).

On success it answers with `{open: true}` and powers gpio port 7 and 11. After 2 seconds it sets the gpio ports back to the state they where before.

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
