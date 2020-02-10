const { Router } = require('express');
const router = new Router();
const DragonRepository = require('../dragon/repository');

router.get('/new', (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonRepository.saveDragon(dragon)
    .then(({ dragonId }) => {
      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
    .catch(error => next(error));
});

module.exports = router;
