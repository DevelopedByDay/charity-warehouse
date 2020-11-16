const { AuthenticationError } = require('apollo-server-express');
const { User, Charity } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('savedCharities');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    charities: async (parent, {name}) => {
      const params = name ? {name} : {};
      return Charity.find(params);
    },

    savedCharities: async (parent, {username}) => {
      const params = username ? {username} : {};
      return Charity.find(params);
    },

    user: async (parent, {username}) => {
      return User.findOne({username})
        .select('-__v -password')
        .populate('savedCharities');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharity: async (parent, {charityId}, context) => {
      console.log('something');
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedCharities: charityId } },
                { new: true }
            ).populate('savedCharities');

            return updatedUser;
        }
        
        throw new AuthenticationError('Login required!');
    }
  }
}

module.exports = resolvers;