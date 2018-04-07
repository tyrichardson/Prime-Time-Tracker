//router out to database
const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

//GET history of projects
router.get('/', (req, res) => {
  console.log('entered GET entry history in manageProjects.router.js');
  let queryText = `SELECT "p"."id" as "p_id", "p"."project_name" as "p_name", "e"."id" as "e_id", "e"."project_id" as "e_project_id", "e"."hours" as "e_hours" FROM "projects" as "p" JOIN "entries" as "e" ON "p"."id" = "e"."project_id";`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error in manageProjectsRouter GET', error);
      res.send(500);
    });
});

//POST entry
router.post('/', (req, res) => {
  console.log('entered POST entry history in manageProjects.router.js');
  let project = req.body;
  let queryText = "INSERT INTO projects (project_name) VALUES ($1);";
  pool.query(queryText, [project.project_name])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('Error in manageProjectsRouter POST', err);
      res.sendStatus(500);
    });
});

//DELETE project
router.delete('/:id', (req, res) => {
  console.log('entered DELETE in manageProjects.router.js', req.params);
  const projectId = req.params.id;
  pool.query('DELETE FROM "projects" WHERE "id" = $1;', [projectId])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('router error making project delete query', error);
      res.sendStatus(500);
    });
});

module.exports = router;