const Generation = require('./index');
const GenerationRepository = require('./repository');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.newGeneration();
  }

  stop() {
    // instead of this.timer = null;
    clearTimeout(this.timer); // bc of the event queue
  }

  newGeneration() {
    this.generation = new Generation();
    GenerationRepository.saveGeneration(this.generation);

    console.log('new generation:', this.generation);

    this.timer = setTimeout(() => {
      this.newGeneration();
    }, this.generation.expiration.getTime() - Date.now());
  }
}

module.exports = GenerationEngine;
