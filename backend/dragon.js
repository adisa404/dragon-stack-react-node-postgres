const DEFAULT_PROPERTIES = {
  birthDate: new Date(),
  nickname: 'unnamed',
};

class Dragon {
  constructor({ birthDate, nickname }) {
    this.birthDate = birthDate || DEFAULT_PROPERTIES.birthDate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;
