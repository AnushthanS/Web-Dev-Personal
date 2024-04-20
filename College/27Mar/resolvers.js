import UserModel from "./models/user.js";

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await UserModel.find();
        }
    },

    Mutation: {
        createUser: async (_, { name, age }) => {
            const user = new UserModel({ name, age });
            return await user.save();
        }
    }
}

module.exports = resolvers;