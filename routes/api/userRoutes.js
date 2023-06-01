const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// GET and POST routes for /users 
router.route('/users')
  .get(getAllUsers)
  .post(createUser);

// GET, PUT, and DELETE routes for /user when using its _id
router.route('/users/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;