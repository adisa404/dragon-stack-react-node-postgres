const pool = require('../../databasePool');

class GenerationRepository {
  static saveGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        (error, response) => {
          if (error) return reject('error');
          const generationId = response.rown[0].id;

          resolve({ generationId });
        },
      );
    });
  }
}

module.exports = GenerationRepository;
