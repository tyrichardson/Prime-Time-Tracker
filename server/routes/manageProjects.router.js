//router out to database
const pool = require('../modules/pool.js');
let express = require('express');
const router = express.Router();

//GET history of projects
router.get('/', (req, res) => {
  console.log('entered GET entry history in manageProjects.router.js');
  let queryText = ` SELECT SUM(COALESCE("hours",0)) as sum, "projects"."project_name", "projects"."id" FROM "projects" LEFT JOIN "entries" ON "projects"."id" = "entries"."project_id" GROUP BY "projects"."id", "projects"."project_name";`;
  console.log("Kam's Magic Query results as queryText:", queryText);
  pool
    .query(queryText)
    .then((result) => {
      console.log(
        'result from get history of manageProjects backend route:',
        result.rows
      );
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in manageProjectsRouter GET', error);
      res.send(500);
    });
});

//POST entry
router.post('/', (req, res) => {
  console.log('entered POST entry history in manageProjects.router.js');
  let project = req.body;
  let queryText = 'INSERT INTO projects (project_name) VALUES ($1);';
  pool
    .query(queryText, [project.project_name])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error in manageProjectsRouter POST', err);
      res.sendStatus(500);
    });
});

//DELETE project
router.delete('/:id', (req, res) => {
  console.log('entered DELETE in manageProjects.router.js', req.params);
  const projectId = req.params.id;
  pool
    .query('DELETE FROM "projects" WHERE "id" = $1;', [projectId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('router error making project delete query', error);
      res.sendStatus(500);
    });
});

module.exports = router;
