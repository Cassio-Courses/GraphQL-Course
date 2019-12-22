const { perfis } = require("../../data/db");

module.exports = {
	perfis() {
		return perfis;
	},
	perfil(_, { id }) {
		const perfilSelecionado = perfis.filter(p => p.id === id);
		return perfilSelecionado ? perfilSelecionado[0] : null;
	}
};
