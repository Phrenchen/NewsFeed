start webserver:
node server.js (in frontend root, listens at port 8080)

start angular frontend:
ng serve (port 4200)

generate ssl key: (https://flaviocopes.com/express-https-self-signed-certificate/)
openssl req -nodes -new -x509 -keyout server.key -out server.cert