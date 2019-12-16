const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	# Pontos de entrada da sua API
	type Query {
		ola: String!
		dataCerta: String!
	}
`;

const resolvers = {
	Query: {
		ola() {
			return "Olá, tudo bem?";
		},
		dataCerta() {
			const date = new Date();
			return date.toTimeString();
		}
	}
};
const servers = new ApolloServer({ typeDefs, resolvers });

servers.listen().then(({ url }) => {
	console.log(`Servidor iniciado na porta: ${url}`);
});
