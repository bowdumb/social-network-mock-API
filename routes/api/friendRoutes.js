const router = require('express').Router();
const {
  addFriend,
  removeFriend,
} = require('../../controllers/friendController');
// POST and DELETE routes for friends
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;