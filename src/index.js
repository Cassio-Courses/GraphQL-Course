const { ApolloServer, gql } = require("apollo-server");
const perfis = [
	{ id: 1, perfil: "administrador" },
	{ id: 2, perfil: "comum" }
];
const usuarios = [
	{
		id: 1,
		nome: "Cassio",
		email: "cassio8186@gmail.com",
		idade: 21,
		salario_real: 1200.24,
		vip: true,
		familia: [
			{ nome: "alanna", idade: 21 },
			{ nome: "lea", idade: 50 }
		],
		perfil_id: 1
	},
	{
		id: 2,
		nome: "Daniele",
		email: "daniele@gmail.com",
		idade: 25,
		salario_real: 1400.24,
		vip: false,
		familia: [{ nome: "jorge", idade: 41 }],
		perfil_id: 1
	},
	{
		id: 3,
		nome: "Junin",
		email: "junin@gmail.com",
		idade: 21,
		salario_real: 19403.24,
		vip: false,
		perfil_id: 1
	}
];
const typeDefs = gql`
	scalar Date
	type Perfil {
		id: Int!
		perfil: String!
	}
	type Produto {
		nome: String!
		preco: Float!
		desconto: Float
		precoComDesconto: Float!
	}
	type PessoaFamilia {
		nome: String!
		idade: Int!
	}
	type Usuario {
		id: Int
		nome: String!
		email: String!
		idade: Int!
		salario: Float
		vip: Boolean
		familia: [PessoaFamilia!]
	}
	# Pontos de entrada da sua API
	type Query {
		ola: String!
		dataCerta: Date!
		usuarioLogado: Usuario
		produtoEmDestaque: Produto
		numerosMegaSena: [Int]
		usuarios: [Usuario]!
		usuario(id: Int): Usuario
		perfis: [Perfil!]!
		perfil(id: Int): Perfil
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
		},
		familia(usuario) {
			return usuario.familia;
		}
	},
	Query: {
		perfil(_, { id }) {
			const perfil = perfis.filter(perfil => perfil.id === id);
			return perfil[0];
		},
		perfis() {
			return perfis;
		},
		usuarios() {
			return usuarios;
		},

		usuario(_, params) {
			const selecionados = usuarios.filter(usuario => usuario.id === params.id);
			return selecionados ? selecionados[0] : null;
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
