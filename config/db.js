import mariadb from 'mariadb';

// Configuração da pool de conexões
const pool = mariadb.createPool({
  host: 'localhost',       // Endereço do servidor do MariaDB
  port: 3308,              // Porta do MariaDB (3308)
  user: 'root',            // Usuário do banco de dados
  password: 'sua_senha',   // Senha do banco de dados
  database: 'universidade', // Nome do banco de dados
  connectionLimit: 5,      // Número máximo de conexões na pool
});

// Exportar a pool para ser usada em outros arquivos
export default pool;