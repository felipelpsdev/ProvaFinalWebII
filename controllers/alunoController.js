import pool from '../config/db.js';

export const cadastrarAluno = async (req, res) => {
  let conn;
  try {
    const { matricula, nome, email } = req.body;

    conn = await pool.getConnection();

    
    const result = await conn.query(
      'INSERT INTO alunos (matricula, nome, email) VALUES (?, ?, ?)',
      [matricula, nome, email]
    );

    res.status(201).json({ id: result.insertId, matricula, nome, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
   
    if (conn) conn.release();
  }
};

export const listarAlunos = async (req, res) => {
  let conn;
  try {

    conn = await pool.getConnection();


    const alunos = await conn.query('SELECT * FROM alunos');

    res.status(200).json(alunos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    
    if (conn) conn.release();
  }
};