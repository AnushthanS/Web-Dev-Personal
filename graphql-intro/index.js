// create a express server

const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql"); // Updated import statement

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /authors:
 *  get:
 *    description: Get all authors
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
app.get("/authors", (req, res) => {
  res.send(authors);
});

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const graphql = require("graphql");
const port = 3000;

const authors = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "J. R. R. Tolkien" },
  { id: 3, name: "Brent Weeks" },
];

const books = [
  { id: 1, name: "Harry Potter and the Chamber of Secrets", authorId: 1 },
  { id: 2, name: "Harry Potter and the Prisoner of Azkaban", authorId: 1 },
  { id: 3, name: "Harry Potter and the Goblet of Fire", authorId: 1 },
  { id: 4, name: "The Fellowship of the Ring", authorId: 2 },
  { id: 5, name: "The Two Towers", authorId: 2 },
  { id: 6, name: "The Return of the King", authorId: 2 },
  { id: 7, name: "The Way of Shadows", authorId: 3 },
  { id: 8, name: "Beyond the Shadows", authorId: 3 },
];

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'Query',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello World'
//             },
//             Name:{
//                 type: GraphQLString,
//                 resolve: () => 'My Name is Nikunj'
//             },
//             RollNumber:{
//                 type: GraphQLInt,
//                 resolve: () => '159'
//             }
//         })
//     })
// });

// Write a RootQuery for books and authors

const BookType = new graphql.GraphQLObjectType({
  name: "Book",
  description: "This represents a Book written by an Author",
  fields: () => ({
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
    name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    authorId: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
    author: {
      type: AuthorType,
      resolve(book, args) {
        return authors.find((author) => author.id === book.authorId);
      },
    },
  }),
});


const AuthorType = new graphql.GraphQLObjectType({
  name: "Author",
  description: "This represents an Author of a Book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: graphql.GraphQLList(BookType),
      resolve(author, args) {
        return books.filter((book) => book.authorId === author.id);
      },
    },
  }),
});

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType",
  description: "Root Query",
  fields: {
    book: {
      type: BookType,
      description: "Single Book Query",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve(parent, args) {
        return books.find((book) => book.id === args.id);
      },
    },
    books: {
      type: new graphql.GraphQLList(BookType),
      description: "List of Books",
      resolve: () => books,
    },


    author: {
      type: AuthorType,
      description: "Single Author Query",
      args: {
        id: {
          type: graphql.GraphQLInt,
        },
      },
      resolve(parent, args) {
        return authors.find((author) => author.id === args.id);
      },
    },
    authors: {
      type: new graphql.GraphQLList(AuthorType),
      description: "List of Authors",
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

// RootMuatation type

const RootMutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a Book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                const book = { id: books.length + 1, name: args.name, authorId: args.authorId };
                books.push(book);
                return book;
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add a Author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const author = { id: authors.length + 1, name: args.name };
                authors.push(author);
                return author;
            }
        },
        // delete the books and authors
        deleteBook: {
            type: BookType,
            description: 'Delete a Book',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                const index = books.findIndex(book => book.id === args.id);
                if (index === -1) {
                    throw new Error('Book not found');
                }
                const deletedBook = books.splice(index, 1)[0];
                return deletedBook;
            }
        },
        deleteAuthor: {
            type: AuthorType,
            description: 'Delete an Author',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                const index = authors.findIndex(author => author.id === args.id);
                if (index === -1) {
                    throw new Error('Author not found');
                }
                const deletedAuthor = authors.splice(index, 1)[0];
                // Also delete the books associated with the author
                books = books.filter(book => book.authorId !== args.id);
                return deletedAuthor;
            }
        },

        // edit the books and authors
        editBook: {
            type: BookType,
            description: 'Edit a Book',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLString },
                authorId: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const { id, name, authorId } = args;
                const book = books.find(book => book.id === id);
                if (!book) {
                    throw new Error('Book not found');
                }
                if (name) {
                    book.name = name;
                }
                if (authorId) {
                    book.authorId = authorId;
                }
                return book;
            }
        },
        editAuthor: {
            type: AuthorType,
            description: 'Edit an Author',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                const { id, name } = args;
                const author = authors.find(author => author.id === id);
                if (!author) {
                    throw new Error('Author not found');
                }
                if (name) {
                    author.name = name;
                }
                return author;
            }
        }
    })
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutationType
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, // Pass the schema to the middleware
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get('/allAuthors', (req, res) => {
  graphqlHTTP({
    schema: schema,
    graphiql: false
  })(req, res)
})

app.get('/authors/:id', (req, res)=> {
  let id = Integer.parseInt(req.params.id)
  graphqlHTTP({
    schema: schema,
    graphiql: false
  })({
    query: `query{ 
      author(id: ${id}) {
         name
         }
        }`
  }, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
