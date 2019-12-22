const { perfis } = require("../../data/db");

module.exports = {
	perfil(usuario) {
		const perfisSelecionados = perfis.filter(p => p.id === usuario.perfil_id);

		return perfisSelecionados ? perfisSelecionados[0] : null;
	}
};
