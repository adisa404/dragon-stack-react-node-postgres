const { REFRESH_RATE, SECONDS } = require('../config');
const Dragon = require('../dragon/index.js');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
  }

  calculateExpiration() {
    this.expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    this.msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - this.expirationPeriod
        : refreshRate + this.expirationPeriod;

    return new Date(Date.now() + this.msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration)
      throw new Error(`The generation expired in ${this.expiration}`);

    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;
