//router out to database

const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

//GET history of entries
router.get('/', (req, res) => {
  console.log('entered GET entry history in reports.router.js');
  pool.query(`SELECT * FROM entries;`)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error in reports GET', error);
      res.send(500);
    });
});

module.exports = router;