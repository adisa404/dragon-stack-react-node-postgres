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
