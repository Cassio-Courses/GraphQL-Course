const path = require("path");
const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const Query = require("./resolvers/Query");
const Produto = require("./resolvers/Produto");
const Usuario = require("./resolvers/Usuario");

const resolvers = {
	Produto,
	Usuario,
	Query
};

const schemaPath = path.resolve(__dirname, "schema", "index.graphql");
const schema = importSchema(schemaPath);

const servers = new ApolloServer({
	typeDefs: importSchema(schema),
	resolvers
});

servers.listen().then(({ url }) => {
	console.log(`Servidor iniciado na porta: ${url}`);
});
