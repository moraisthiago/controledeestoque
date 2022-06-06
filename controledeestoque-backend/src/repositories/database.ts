import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ESTOQUES_CREATE = `
    CREATE TABLE estoques (
        id_estoque INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )`

const SQL_PRODUTOS_CREATE = 
    `CREATE TABLE produtos (
        id_table INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT,
        quantidade INTEGER,
        id_estoque INTEGER
    )`

const SQL_TABLES_CREATE = [
    `CREATE TABLE estoques (
        id_estoque INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )`,
    `CREATE TABLE produtos (
        id_table INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT,
        quantidade INTEGER,
        id_estoque INTEGER
    )`
]

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        for (var table in SQL_TABLES_CREATE){
            database.run(SQL_TABLES_CREATE[table], (err) => {
                if (err) {
                    // Possivelmente a tabela já foi criada
                } else {
                    console.log('Tabela criada.')
                }
            })
        }
    }
})

export default database
