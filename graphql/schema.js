const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: string
    status: String!
    posts: [Post!]!
  }

  type AuthData {
    token: String!
    userId: String!
  }

  input UserInputData {
    email: String!
    name: String!
    password: String!
  }

  type PostData {
    posts: [Post!]!
    totalPosts: Int!
  }

  input PostInputData {
    title: String!
    content: String!
    imageUrl: String!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
    createPost(postInput: PostInputData): Post!
    updatePost(postId: ID!, postInput: PostInputData!): Post!
    deletePost(postId: ID!): Boolean
    updateStatus(status: String!): User!
  }

  type RootQuery {
    login(email: String!, password: String!): AuthData
    getPosts(page: Int): PostData!
    getPost(postId: ID!): Post!
    getUser: User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
