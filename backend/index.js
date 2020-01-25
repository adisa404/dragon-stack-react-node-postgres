const Dragon = require('./dragon');

console.log('entry point');
const dragon = new Dragon({
  birthDate: new Date(),
  nickname: 'Disa',
});

console.log(dragon);
