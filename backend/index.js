const Dragon = require('./dragon');

console.log('entry point');
const dragon = new Dragon({
  birthDate: new Date(),
  nickname: 'Disa',
});

const dragon2 = new Dragon();

console.log(dragon);
console.log(dragon2);

setTimeout(() => {
  const dragon3 = new Dragon();
  console.log(dragon3);
}, 3000);
