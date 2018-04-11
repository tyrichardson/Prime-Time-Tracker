//Node HQ; server config,.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const addEntryRouter = require('./routes/addEntry.router.js');
const manageProjectsRouter = require('./routes/manageProjects.router.js');

let port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/addEntry', addEntryRouter);
app.use('/manageProjects', manageProjectsRouter);


app.use(express.static('server/public'));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});



