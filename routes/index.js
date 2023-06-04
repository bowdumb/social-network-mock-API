// Import the Express router module
const router = require('express').Router();
// Import the API routes from apiRoutes module
const apiRoutes = require('./api/apiRoutes');
// Set up API routes as '/api'
router.use('/api', apiRoutes);
// Creates a default message for routes that don't match the defined API routes
router.use((req, res) => res.send('Wrong route dude!'));
// Exports the router for use in other files
module.exports = router;
