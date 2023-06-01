const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

const users = [
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
    // Add more user objects as needed
  ];
  
  const thoughts = [
    { thoughtText: 'Thought 1', username: 'user1' },
    { thoughtText: 'Thought 2', username: 'user2' },
    // Add more thought objects as needed
  ];

  const seedDatabase = async () => {
    try {
      // Clear existing data (optional)
    //   await User.deleteMany();
    //   await Thought.deleteMany();
  
      // Insert seed data
      const createdUsers = await User.insertMany(users);
      const createdThoughts = await Thought.insertMany(thoughts);
  
      console.log('Seed data inserted successfully!');
      console.log('Created Users:', createdUsers);
      console.log('Created Thoughts:', createdThoughts);
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Close database connection (if applicable)
      // mongoose.connection.close();
    }
  };

  seedDatabase();