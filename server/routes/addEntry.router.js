//router out to database
const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

//GET entry history
router.get('/', (req, res) => {
  console.log('entered GET entry history in addEntry.router.js');
  pool.query(`SELECT "e"."id" as "e_id", "e"."entry" as "e_name", "e"."date" as "e_date", "e"."hours" as "e_hours", "e"."project_id" as "e_project_id", "p"."id" as "p_id", "p"."project_name" as "p_name" FROM "entries" as "e" JOIN "projects" as "p" ON "e"."project_id"="p"."id" ORDER BY "e_date" DESC;`)
    .then(result => {
      console.log("result.rows of get entry history from backend addEntry router");
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error in addEntryRouter GET', error);
      res.send(500);
    });
});

//POST new entry
router.post('/', (req, res) => {
  console.log('entered POST in addEntry.router.js');
  const entry = req.body;
  const queryText = `INSERT INTO "entries" (entry, project_id, date, hours) VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [entry.entry, entry.project_id, entry.date, entry.hours])
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
