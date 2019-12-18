const { perfis } = require("../data/db");

module.exports = {
	salario(usuario) {
		return usuario.salario_real * 15;
	},
	familia(usuario) {
		return usuario.familia;
	},
	perfil(usuario) {
		const perfil = perfis.filter(perfil => usuario.perfil_id === perfil.id);
		return perfil[0];
	}
};
