const express = require('express');
const apiRoutes = require('./api/routes');

const app = express();

app.use('/files', express.static('./files'))
app.use('/api', apiRoutes);

app.listen(8000);
