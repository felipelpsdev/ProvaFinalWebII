import pool from '../config/db.js';

export const cadastrarDisciplina = async (req, res) => {
  let conn;
  try {
    const { descricao } = req.body;

    // Obter uma conexão da pool
    conn = await pool.getConnection();

    // Inserir a disciplina no banco de dados
    const result = await conn.query(
      'INSERT INTO disciplinas (descricao) VALUES (?)',
      [descricao]
    );

    // Retornar a disciplina cadastrada
    res.status(201).json({ id: result.insertId, descricao });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    // Liberar a conexão de volta para a pool
    if (conn) conn.release();
  }
};

export const listarDisciplinas = async (req, res) => {
  let conn;
  try {
    // Obter uma conexão da pool
    conn = await pool.getConnection();

    // Buscar todas as disciplinas no banco de dados
    const disciplinas = await conn.query('SELECT * FROM disciplinas');

    // Retornar a lista de disciplinas
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    // Liberar a conexão de volta para a pool
    if (conn) conn.release();
  }
};