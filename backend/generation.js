const { REFRESH_RATE, SECONDS } = require('./config');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = calculateExpiration();
  }

  calculateExpiration() {
    this.expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    this.msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - this.expirationPeriod
        : refreshRate + this.expirationPeriod;

    return new Date(new Date.now() + this.msUntilExpiration);
  }
}
