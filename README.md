# react-dragon-stack

# steps

- add /backend folder
- cd backend
- npm init

- create dragon class in dragon.js
- initialize dragon object and log to console

## rerafctor dragon class

- pass object to constructor instead of single params
- set default props for constructor. Since js cannot deconstruct an empty object in case new Dragon(), we need to set any incomming valiue to an ampty object if objet not provided

```js
constructor(({ birthDate, nickname } = {}));
```

- fix issue with birthdate creation. We don't need the birthday created when the dragon class i loaded. We need the birthdate created in the constructor.
  WE build a getter
  get birthdate()
  and every time .birthdate is called the date is created in the right place.

  ## environment settings - install nodemon

  npm i nodemon --save-dev

  --save-dev // to save nodemon as a devlopment dependency
  https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev

  ## environment settings - edit package.json

  ```json
    "scripts": {
    "start": "node .", // to start index.js
    "dev": "nodemon ." // to start nodemon
  },
  ```

npm run start
npm run dev // will watch the changes

# setTimeout

- ne zadrzava program nego zaustavlja odedjen block, slijedeca linija odmah dalje radi

# dragon properties - called traits

type of properties
type: backgroundColor:
value: aray of background colors

# dragon properties - generation

- generation of a dragon will go in a separate file
- create config.js

# generation class

- set expiration date, but not as a requirement for creating new generations
- expiration date = current time + refresh rate
- expirationPeriod - to be random
- create newDragon only if expiration larger than currentDateTime

# generation engine class

Create a Generation Engine. Do so with a class called GenerationEngine. The engine will need to create a new generation object when the previous one has expired.

newGeneration() will reqursivley call itself when a generation has expired
use timer to stop

# creating a webserver with express.js

npm i express

start server with app.listen() //3003

app.get('/dragon/new', (req, res) ...

http://localhost:3003/dragon/new

# create a start for our app in server.js

- create server.js
- export const app = express(); and use in index.js

# folder structure

app/
-index.js
-config.js
-dragon.js
-engine.js // bound to generation... new folder
-generation.js // in new generation folder rename to index.js
// changed generation.js to index.js. bc when referencing the folder that is the default file

/data
-traits.json

bin/ - had issues with bin folder, left this file in root.
server.js

# GET request for single generation

# fix circular dependancy issues with express

register engine in:

```js
app.locals.engine = engine; // now the engine instance is publicly available
```

/api/dragon.js
/api/generation.js

//TEST
http://localhost:3003/dragon/new
http://localhost:3003/generation/

# Install PostgreSQL

- Download instllation app from https://postgresapp.com/
- Move downloaded package to Applications
- Open package in applications
- Click on initialite. In settings make sure the default port is 5432
- In terminal run:
  psql --help
  psql -U postgres// tun the shell as the postgres user// this user is set by default

# create dragonstack db

createdb -U postgres dragonstackdb;
// only works in shell
\$ + command;
End command with semicolon, otherwise the terminal waits for farther input

# connect to dragonstack db

psql -U postgres dragonstackdb
// this is in sql mode

# list all dbs

psql \l
// works in sql mode

# get out of db mode

\q
// works in sql mode

# db mode

we write sql here
lowercase also wroks

CREATE DATABASE test;

## PostgreSQL clients

DataGrip from Jetbrains  
Postico only for Mac users

# create user

CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';
+E:
CREATE ROLE

// works in sql mode
// where node_password is the our new password
// access and privilages --> WITH SUPERUSER

To confirm that this user exists we can run a select statement:
SELECT \* FROM pg_user;

in the list of users we should see the node_user

- kod njega ctrl D prouzrokuje \q (da izadje iz sql mode). Treba prvjeriti jel kod mene tako
