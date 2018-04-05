//router out to database
const pool = require('../modules/pool.js');
let express = require('express');
let router = express.Router();

//GET history of entries
router.get('/', (req, res) => {
  let queryText = "SELECT * FROM entries;";
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in addEntryRouter GET', error);
      res.send(500);
    });
});

//POST entry
router.post('/', (req, res) => {
  const queryText = "INSERT INTO entries (entry, date, hours) VALUES ($1, $2, $3);";
  pool.query(queryText, [req.body.entry, req.body.date, req.body.hours])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error in addEntryRouter POST', err);
      res.sendStatus(500);
    });
});

//DELETE entry
router.delete('/:id', (req, res) => {
  const entryId = req.query.id;
  pool.delete('DELETE FROM "entries" WHERE "id" = $1;', [entryId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Router error making ship delete query', error);
      res.sendStatus(500);
    });
});

module.exports = router;