const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  }
);

userSchema.pre('remove', async function (next) {
  try {
    await this.model('Thought').deleteMany({ username: this.username });
    next();
  } catch (error) {
    next(error);
  }
});

const User = model('User', userSchema);

module.exports = User;