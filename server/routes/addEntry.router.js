//router out to database
const router = express.Router();
const pool = require('../modules/pool.js');
let express = require('express');


//GET history of entries
router.get('/', (req, res) => {
  console.log('entered GET entry history in addEntry.router.js');
  pool.query(`SELECT * FROM entries;`)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error in addEntryRouter GET', error);
      res.send(500);
    });
});

//POST entry
router.post('/', (req, res) => {
  console.log('entered POST in addEntry.router.js');
  const entry = req.body;
  const queryText = "INSERT INTO entries (entry, date, hours) VALUES ($1, $2, $3);";
  pool.query(queryText, [entry.entry, entry.date, entry.hours])
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
  console.log('entered DELETE in addEntry.router.js');
  const entryId = req.params.id;
  pool.query('DELETE FROM "entries" WHERE "id" = $1;', [entryId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Router error making ship delete query', error);
      res.sendStatus(500);
    });
});

module.exports = router;