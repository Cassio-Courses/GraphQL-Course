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
		perfil_id: 1,
		status: "ATIVO"
	},
	{
		id: 2,
		nome: "Daniele",
		email: "daniele@gmail.com",
		idade: 25,
		salario_real: 1400.24,
		vip: false,
		familia: [{ nome: "jorge", idade: 41 }],
		perfil_id: 2,
		status: "INATIVO"
	},
	{
		id: 3,
		nome: "Junin",
		email: "junin@gmail.com",
		idade: 21,
		salario_real: 19403.24,
		vip: false,
		perfil_id: 2,
		status: "BLOQUEADO"
	}
];
module.exports = { perfis, usuarios };
