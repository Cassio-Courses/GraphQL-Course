const { usuarios, proximoId } = require("../../data/db");
const { retornaIndiceUsuario } = require("../../functions");

module.exports = {
	novoUsuario(_, { dados }) {
		const emailExistente = usuarios.some(
			usuario => usuario.email === dados.email
		);
		if (emailExistente) {
			throw new Error("Email Cadastrado");
		}
		const novoUsuario = {
			id: proximoId(),
			...dados,
			perfil_id: 2,
			status: "ATIVO"
		};
		usuarios.push(novoUsuario);
		return novoUsuario;
	},
	excluirUsuario(_, { filtro }) {
		const indiceUsuario = retornaIndiceUsuario(usuarios, filtro);

		if (indiceUsuario < 0) {
			return null;
		}
		const usuarioExcluido = usuarios.splice(indiceUsuario, 1);
		return usuarioExcluido ? usuarioExcluido[0] : null;
	},
	alterarUsuario(_, { filtro, dados }) {
		const indiceUsuario = retornaIndiceUsuario(usuarios, filtro);
		if (indiceUsuario < 0) {
			return null;
		}
		const usuarioAlterado = {
			...usuarios[indiceUsuario],
			...dados
		};
		usuarios.splice(indiceUsuario, 1, usuarioAlterado);
		return usuarioAlterado;
	}
};
