const Dragon = require('./dragon');

console.log('entry point');
const dragon = new Dragon({
  birthDate: new Date(),
  nickname: 'Disa',
});

const dragon2 = new Dragon();

console.log(dragon);
console.log(dragon2);
