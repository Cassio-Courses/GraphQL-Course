const { usuarios, proximoId } = require("../data/db");

module.exports = {
	novoUsuario(_, dadosNovoUsuario) {
		const emailExistente = usuarios.some(
			usuario => usuario.email === dadosNovoUsuario.email
		);
		if (emailExistente) {
			throw new Error("Email Cadastrado");
		}
		const novoUsuario = {
			id: proximoId(),
			...dadosNovoUsuario,
			perfil_id: 2,
			status: "ATIVO"
		};
		usuarios.push(novoUsuario);
		return novoUsuario;
	},
	excluirUsuario(_, { id }) {
		const usuarioSelecionado = usuarios.findIndex(usuario => usuario.id === id);
		if (usuarioSelecionado < 0) {
			return null;
		}
		const usuarioExcluido = usuarios.splice(usuarioSelecionado, 1);
		return usuarioExcluido ? usuarioExcluido[0] : null;
	}
};
