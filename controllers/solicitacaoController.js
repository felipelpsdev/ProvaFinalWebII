import pool from '../config/db.js';

export const cadastrarSolicitacao = async (req, res) => {
  let conn;
  try {
    const { data, alunos_id, disciplinas_id } = req.body;

    conn = await pool.getConnection();

    // Inserir a solicitação no banco de dados
    const result = await conn.query(
      'INSERT INTO solicitacoes (data, alunos_id, disciplinas_id) VALUES (?, ?, ?)',
      [data, alunos_id, disciplinas_id]
    );

    res.status(201).json({ id: result.insertId, data, alunos_id, disciplinas_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    
    if (conn) conn.release();
  }
};

export const listarSolicitacoes = async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();

    const solicitacoes = await conn.query(`
      SELECT s.id, s.data, s.status, a.nome AS aluno, d.descricao AS disciplina
      FROM solicitacoes s
      INNER JOIN alunos a ON s.alunos_id = a.id
      INNER JOIN disciplinas d ON s.disciplinas_id = d.id
    `);

    
    res.status(200).json(solicitacoes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
   
    if (conn) conn.release();
  }
};

export const atualizarStatusSolicitacao = async (req, res) => {
  let conn;
  try {
    const { id, status } = req.body;

    // Obter uma conexão da pool
    conn = await pool.getConnection();

    // Atualizar o status da solicitação
    await conn.query(
      'UPDATE solicitacoes SET status = ? WHERE id = ?',
      [status, id]
    );

    // Retornar mensagem de sucesso
    res.status(200).json({ message: 'Status da solicitação atualizado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    // Liberar a conexão de volta para a pool
    if (conn) conn.release();
  }
};