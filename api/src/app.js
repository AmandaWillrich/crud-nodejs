const express = require('express');
const cors = require('cors');

const createOrder = require('./routes/createOrderRouter');
const deleteOrder = require('./routes/deleteOrderByIdRouter');
const updateOrder = require('./routes/updateOrderByIdRouter');
const getOrders = require('./routes/getOrdersRouter');

const app = express();

// Configs
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

// Routes
app.use('/api', createOrder);
app.use('/api', deleteOrder);
app.use('/api', updateOrder);
app.use('/api', getOrders);

module.exports = app;