const express = require('express');
const cors = require('cors');

const index = require('./routes/index');
const testRoute = require('./routes/test.routes');

const app = express();

// Configs
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

// Routes
app.use(index);
app.use('/api/', testRoute);

module.exports = app;