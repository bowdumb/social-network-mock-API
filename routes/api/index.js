const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes')
const apiRoutes = require('./apiRoutes')

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/friends', friendRoutes);
router.use('/api', apiRoutes);

module.exports = router;
