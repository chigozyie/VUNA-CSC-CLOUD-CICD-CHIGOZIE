const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS. NAME: UHIARA CHIGOZIE PATRICK, MATRIC:VUG/CSC/22/7517'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
