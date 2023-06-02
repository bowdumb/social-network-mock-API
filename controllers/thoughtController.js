const Thought = require('../models/Thought');
const User = require('../models/User');

// Controller function to get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// Controller function to get a single thought
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id).populate('username', 'username');

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get thought' });
  }
};

// Controller function to create a new thought
const createThought = async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;
    const thought = await Thought.create({ thoughtText, username });

    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { thoughts: thought._id } },
      { new: true }
    );

    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// Controller function to update a thought
const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update thought' });
  }
};

// Controller function to delete a thought
const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete thought' });
  }
};

// Controller function to create a reaction for a thought
const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params.id;
    const { reactionBody, username } = req.body;

    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: { reactionBody, username } } },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// Controller function to remove a reaction from a thought
const removeReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { reactionId } = req.body;

    const thought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
};