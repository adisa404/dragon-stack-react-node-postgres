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
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const engine = new GenerationEngine();
const app = express();

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);
app.locals.engine = engine;

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ type: 'error', message: err.message });
});

engine.start();
// setTimeout(() => engine.stop(), 20000);

module.exports = app;
