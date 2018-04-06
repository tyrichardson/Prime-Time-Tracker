//router out to database
const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

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
  const queryText = `INSERT INTO "entries" (entry, date, hours, start_time, end_time) VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [entry.entry, entry.date, entry.hours, entry.start_time, entry.end_time])
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
  console.log('entered DELETE in addEntry.router.js', req.params);
  const entryId = req.params.id;
  pool.query('DELETE FROM "entries" WHERE "id" =$1;', [entryId])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('Router error making entry delete query', error);
      res.sendStatus(500);
    });
});

module.exports = router;