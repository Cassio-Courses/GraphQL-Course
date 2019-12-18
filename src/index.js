const path = require("path");
const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const resolvers = require("./resolvers");

const schemaPath = path.resolve(__dirname, "schema", "index.graphql");
const schema = importSchema(schemaPath);

const server = new ApolloServer({
	typeDefs: importSchema(schema),
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`Executando em ${url}`);
});
