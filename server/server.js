//Node HQ; server config,.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 5000;
const addEntryRouter = require('./routes/addEntry.router.js');
//const manageProjectsRouter = require('./routes/manageProjects.router.js');
//const reportsRouter = require('./routes/reports.router.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/addEntry', addEntryRouter);
// app.use('/manageProjects', manageProjectsRouter);
// app.use('/reports', reportsRouter);


app.use(express.static('server/public'));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});



