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
