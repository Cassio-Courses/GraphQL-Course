const { perfis, usuarios } = require("../data/db");

module.exports = {
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
};
