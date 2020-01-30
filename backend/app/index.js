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
const express = require('express');
const GenerationEngine = require('./generation/engine');

const engine = new GenerationEngine();
const app = express();

engine.start();
// setTimeout(() => engine.stop(), 20000);

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: engine.generation.newDragon() });
});

module.exports = app;