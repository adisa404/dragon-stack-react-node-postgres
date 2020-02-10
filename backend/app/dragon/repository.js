const pool = require('../../databasePool');

class DragonRepository {
  static saveDragon(dragonObj) {
    const { birthDate, nickname, generationId } = dragonObj;
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(birthdate, nickname, generationid) VALUES($1, $2, $3) RETURNING id',
        [birthDate, nickname, generationId],
        (error, response) => {
          if (error) return reject(error);
          const dragonId = response.rows[0].id;
          console.log('ID ################', dragonId);
          resolve({ dragonId });
        },
      );
    });
  }
}

module.exports = DragonRepository;
