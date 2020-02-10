const { Router } = require('express');
const router = new Router();
const DragonRepository = require('../dragon/repository');

router.get('/new', (req, res) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonRepository.saveDragon(dragon)
    .then(({ dragonId }) => {
      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
    .catch(error => console.log('#########', error));
});

module.exports = router;
