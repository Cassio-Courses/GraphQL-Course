const { usuarios, perfis } = require("../data/db");

module.exports = {
	usuarios() {
		return usuarios;
	},
	usuario(_, { id }) {
		const usuarioSelecionado = usuarios.filter(u => u.id === id);
		return usuarioSelecionado ? usuarioSelecionado[0] : null;
	},
	perfis() {
		return perfis;
	},
	perfil(_, { id }) {
		const perfilSelecionado = perfis.filter(p => p.id === id);
		return perfilSelecionado ? perfilSelecionado[0] : null;
	}
};
