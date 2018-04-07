//router out to database for GET Total hours burned to projects
const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

//GET total hours for each project
router.get('/', (req, res) => {
  console.log('entered GET in projectTotalHours.router.js');
  let queryText = `SELECT "project_id", SUM("hours") as sum FROM "entries" GROUP BY "project_id";`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error in projectTotalHoursRouter GET', error);
      res.send(500);
    });
});