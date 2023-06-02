const express = require('express');
const router = express.Router();

// Import your API controllers or middleware
const userController = require('../../controllers/userController');
const thoughtController = require('../../controllers/thoughtController');
const friendController = require('../../controllers/friendController');

// Define your API routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/thoughts', thoughtController.getAllThoughts);
router.get('/thoughts/:id', thoughtController.getThoughtById);
router.post('/thoughts', thoughtController.createThought);
router.put('/thoughts/:id', thoughtController.updateThought);
router.delete('/thoughts/:id', thoughtController.deleteThought);
router.post('/thoughts/:thoughtId/reactions', thoughtController.createReaction);
router.delete('/thoughts/:thoughtId/reactions', thoughtController.removeReaction)
router.post('/users/:userId/friends/:friendId', friendController.addFriend);
router.delete('/users/:userId/friends/:friendId', friendController.removeFriend);
 

// Export the router
module.exports = router;