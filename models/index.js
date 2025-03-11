const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');
const Solicitacao = require('./Solicitacao');

Aluno.hasMany(Solicitacao, { foreignKey: 'alunos_id' });
Solicitacao.belongsTo(Aluno, { foreignKey: 'alunos_id' });

Disciplina.hasMany(Solicitacao, { foreignKey: 'disciplinas_id' });
Solicitacao.belongsTo(Disciplina, { foreignKey: 'disciplinas_id' });