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

# create generation.sql

data/db/sql/generation.sql

```SQL
CREATE TABLE generation(
	id         INTEGER PRIMARY KEY, /* it is better to have the SERIAL data type - in order for the id to be incremented */
	expiration TIMESTAMP NOT NULL /* add NOT NULL to prevent blank entries */
);
```

we will create an accociation with the generation table by adding the generatiionId
in order to be able to use the camel case in generationId we can surround it by double qotes.

I decided aganst that, since strings in sql ar a code smell

so generationid it is

FOREIGN KEY will allow us to uniquely identfy a column in another table
will be able to do that with identifying a unique key which is the primary key af another table (generation table)
REFERENCES generation(id) // provide schema to be referenced

a dragon can have only 1 generation
but 2 or more dragons can spacify the same generation as their generation id

there is a 1:M relationship between generations and dragons

later on if we want to pull a data about a dragon, we will be quickly able to pull the data of the accociated generation

# add clean up script

add new file data/db/config/configure_db.sh

psql -U node_user dragonstackdb < ./data/db/sql/generation.sql // use < this sign to run the sql script in the node_user dragonstackdb environment

edit package.json
add configure task

npm run configure

# issues

issues when running configure command bc of permissions
run
ls -l //in data/db/config
you will see that the file has only read and write permissions but not the executable x permisson

to add executable permission we use the change mode command:
chmod +x path_to_file
chmod +x ./data/db/config/configure_db.sh
+E
-rwxr-xr-x 1 adisamrvoljak staff 271 3 Feb 16:02 ./data/db/config/configure_db.sh

# show overview

## command \d

                 List of relations

Schema | Name | Type | Owner  
--------+-------------------+----------+-----------
public | dragon | table | node_user
public | dragon_id_seq | sequence | node_user
public | generation | table | node_user
public | generation_id_seq | sequence | node_user
(4 rows)

## command \d dragon

                                         Table "public.dragon"
    Column    |            Type             | Collation | Nullable |              Default

--------------+-----------------------------+-----------+----------+------------------------------------
id | integer | | not null | nextval('dragon_id_seq'::regclass)
birthdate | timestamp without time zone | | not null |
nickname | character varying(64) | | |
generationid | integer | | |
Indexes:
"dragon_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
"dragon_generationid_fkey" FOREIGN KEY (generationid) REFERENCES generation(id)

## command \d generation

                                        Table "public.generation"

Column | Type | Collation | Nullable | Default  
------------+-----------------------------+-----------+----------+----------------------------------------
id | integer | | not null | nextval('generation_id_seq'::regclass)
expiration | timestamp without time zone | | not null |
Indexes:
"generation_pkey" PRIMARY KEY, btree (id)
Referenced by:
TABLE "dragon" CONSTRAINT "dragon_generationid_fkey" FOREIGN KEY (generationid) REFERENCES generation(id)

# connect db and express - install

npm i pg --save

# ceate the database pool

create /backend/databasePool.js

```js
const { Pool } = require('pg'); // is going to be our primary way working with the postgres instance
const pool = new Pool(); // used for CRUD
// we need to provide database props to the Pool()

// credentials etc needs to be provided in form of an object
```

```js
const databaseConfiguration = {
  user: 'db username',
  host: 'localhost',
  database: 'dagonstackdb',
  password: 'db password',
  port: 5432,
};
```

# create secrets folder

- to hide sensitive information

backend/secrets/databaseConfiguration.js

```js
module.exports = {
  user: 'db username',
  host: 'localhost',
  database: 'dagonstackdb',
  password: 'db password',
  port: 5432,
};
```

# pool.query() - pass stored procedures

Often we only need to run a single query on the database,
so as convenience the pool has a method to run a query on the first available idle client and return its result.

use pool.query() to check if a request to the generation table is going to be a success, even if we don't have data yet

```js
pool.query('SELECT * FROM generation', (error, response) => {
  if (error) return console.log('error');
  console.log('response.row', response.rows);
});
```

# create repository.js for generation

everytime a new generation is created it needs to be saved to the db

/generation/repository.js
require databasePool.js

saveGeneration()

```SQL
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

VALUES (value1, value2, value3, ...);// expects an array. Insetad of string interpolation psql has it's own syntax,
which is not zero based

```js
'VALUES ($1)';
```

npm run configure && npm run dev
