const TRAITS = require('./traits.json');
const _ = require('lodash');

const DEFAULT_PROPERTIES = {
  get birthDate() {
    return new Date();
  },

  get randomTraits() {
    const traits = [];

    _.forEach(TRAITS, function(value) {
      const traitType = value.traitType;
      const traitValues = value.traitValues;

      const traitValue =
        traitValues[Math.floor(Math.random(0, 9) * value.traitValues.length)]; // get random index

      traits.push({ traitType, traitValue });
    });

    return traits;
  },
  nickname: 'unnamed',
};

class Dragon {
  constructor({ birthDate, nickname, traits } = {}) {
    this.birthDate = birthDate || DEFAULT_PROPERTIES.birthDate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;
