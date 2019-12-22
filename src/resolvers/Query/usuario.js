const { usuarios } = require("../../data/db");

module.exports = {
	usuarios() {
		return usuarios;
	},
	usuario(_, { id }) {
		const usuarioSelecionado = usuarios.filter(u => u.id === id);
		return usuarioSelecionado ? usuarioSelecionado[0] : null;
	}
};
