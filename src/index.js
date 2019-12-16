const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	# Pontos de entrada da sua API
	type Query {
		ola: String!
	}
`;

const resolvers = {
	Query: {
		ola() {
			return "Basta retornar uma string";
		}
	}
};

const servers = new ApolloServer({ typeDefs, resolvers });

servers.listen().then(({ url }) => {
	console.log(`Servidor iniciado na porta: ${url}`);
});
