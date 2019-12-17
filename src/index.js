const { ApolloServer, gql } = require("apollo-server");
const usuarios = [
	{
		id: 1,
		nome: "Cassio",
		email: "cassio8186@gmail.com",
		idade: 21,
		salario: 1200.24,
		vip: true
	},
	{
		id: 2,
		nome: "Daniele",
		email: "daniele@gmail.com",
		idade: 25,
		salario: 1400.24,
		vip: false
	},
	{
		id: 3,
		nome: "Junin",
		email: "junin@gmail.com",
		idade: 21,
		salario: 19403.24,
		vip: false
	}
];
const typeDefs = gql`
	scalar Date

	type Produto {
		nome: String!
		preco: Float!
		desconto: Float
		precoComDesconto: Float!
	}
	type Usuario {
		id: ID
		nome: String!
		email: String!
		idade: Int!
		salario: Float
		vip: Boolean
	}
	# Pontos de entrada da sua API
	type Query {
		ola: String!
		dataCerta: Date!
		usuarioLogado: Usuario
		produtoEmDestaque: Produto
		numerosMegaSena: [Int]
		usuarios: [Usuario]!
	}
`;
const resolvers = {
	Produto: {
		precoComDesconto(produto) {
			if (produto.desconto) {
				return produto.preco * (1 - produto.desconto);
			} else {
				return produto.preco;
			}
		}
	},
	Usuario: {
		salario(usuario) {
			return usuario.salario_real * 15;
		}
	},
	Query: {
		usuarios() {
			return usuarios;
		},
		produtoEmDestaque() {
			return { nome: "Cassio", preco: 24.41, desconto: 0.85 };
		},
		ola() {
			return "Olá, tudo bem?";
		},
		dataCerta() {
			return new Date();
		},
		usuarioLogado() {
			return {
				id: 1,
				nome: "ana",
				email: "test@gmail.com",
				idade: 21,
				salario_real: 124.321,
				vip: true
			};
		},
		numerosMegaSena() {
			const crescente = (a, b) => a - b;
			return Array(6)
				.fill(0)
				.map(() => parseInt((Math.random() * 60).sort(crescente)));
		}
	}
};
const servers = new ApolloServer({ typeDefs, resolvers });

servers.listen().then(({ url }) => {
	console.log(`Servidor iniciado na porta: ${url}`);
});
