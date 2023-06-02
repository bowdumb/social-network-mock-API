const User = require('../models/User');

const addFriend = async(req, res) => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

// If either the user OR the friend are not found, a 404 status will occur and the user will receive a message and the execution of the
// code will be halted.
    if (!user || !friend) {
      return res.status(404).json({ message: 'User/friend was not found' });
    }
// Evaluates the friends array of the user. If the friend is NOT included (bang operator) in the array, we push the new friend's _id to the array
// and save the changes to the database.
    if (!user.friends.includes(friendId)) {
      user.friends.push(friendId);
      await user.save();
    }

    res.status(200).json({ message: 'Friend added!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'New friend was unable to be added.' });
  }
};

const removeFriend = async(req,res)=> {
  try {
    const { userId, friendId} = req.params;

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if(!user || !friend) {
      return res.status(404).json({ message: 'Friend not found for this user.'});
    }
    // Checks to see if the friendId parameter exists in the user's friends array. If the array contains it, use the Mongoose 'pull' method
    // to remove the that particular _id from the array. After it's removed from the array, the user is updated and changes are saved
    // to the database.
    if(user.friends.includes(friendId)) {
      user.friends.pull(friendId);
      await user.save();
    }
    res.status(200).json({ message: 'Friend successfully removed!'});
  }catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Friend could not be removed.' })
  }
};

  module.exports = {
    addFriend,
    removeFriend,
  };