/**
 * @function retornaIndiceUsuario
 * @param {Array<object>} usuarios
 * @param {object} filtro
 * @return {number} indice
 */
const retornaIndiceUsuario = (usuarios, filtro) => {
	const filtroVazio = !filtro;
	const SEM_RETORNO = -1;
	if (filtroVazio) return SEM_RETORNO;
	const procuraIndiceUsuarioPorId = id =>
		usuarios.findIndex(usuario => usuario.id === id);
	const procuraIndiceUsuarioPorEmail = email =>
		usuarios.findIndex(usuario => usuario.email === email);

	const { id, email } = filtro;

	if (id) {
		return procuraIndiceUsuarioPorId(id);
	}
	if (email) {
		return procuraIndiceUsuarioPorEmail(email);
	}
	return -1;
};
module.exports = retornaIndiceUsuario;
