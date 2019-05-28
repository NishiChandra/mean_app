# mean_app
Install Node:
https://nodejs.org/en/download/

Install Angular:
https://cli.angular.io/

Install MongoDB:
https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/

Unzip Folder:
Node Logic : Backend Folder
Angular : Frontend Folder

Open Cmd prompt in backend folder:
Run command for importing CSV into mongodb:

Sales.csv: mongoimport --db assignment --collection Sales --type csv --file sales.csv --headerline
Stores.csv: mongoimport --db assignment --collection stores --type csv --file storesdata-set.csv --headerline
desc.csv: mongoimport --db assignment --collection desc --type csv --file desc.csv --headerline

For running backend logic:

Run cmd 
Command: npm install
Command : nodemon server.js
Access server on https://localhost:3000/

For running frontend logic:
Run cmd
Command: ng serve --open
Access frontend on https://localhost:4200


