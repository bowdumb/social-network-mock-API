const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router.route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;