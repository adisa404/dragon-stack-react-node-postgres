// const Generation = require('./generation');

// const generation = new Generation();
// console.log('generation:', generation);

// const disa = generation.newDragon('DISA');
// console.log('dragon disa created:', disa);

// test dragon with a delayed creation
// setTimeout(() => {
//   const cano = generation.newDragon('CANO');
//   console.log('dragon cano created:', cano);
// }, 15000);

//###########

const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();
setTimeout(() => engine.stop(), 20000);
