const pool = require('../../databasePool');

class GenerationRepository {
  static saveGeneration(generation) {
    pool.query(
      'INSERT INTO generation(expiration) VALUES($1)',
      [generation.expiration],
      (error, response) => {
        if (error) return console.log('error');
      },
    );
  }
}

module.exports = GenerationRepository;
