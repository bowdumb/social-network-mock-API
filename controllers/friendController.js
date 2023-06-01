// Controller function to add a friend
const addFriend = async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      // Logic to add a friend for the user with userId and friendId
      // ...
  
      res.status(200).json({ message: 'Friend added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add friend' });
    }
  };
  
  // Controller function to remove a friend
  const removeFriend = async (req, res) => {
    try {
      const { userId, friendId } = req.params;
      // Logic to remove a friend for the user with userId and friendId
      // ...
  
      res.status(200).json({ message: 'Friend removed successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove friend' });
    }
  };
  
  module.exports = {
    addFriend,
    removeFriend,
  };