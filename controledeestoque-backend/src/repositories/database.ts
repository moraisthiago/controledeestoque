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
        quantidade INTEGER
    )`

const SQL_TABLES_CREATE = [
    `CREATE TABLE estoques (
        id_estoque INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    );`,

    `CREATE TABLE produtos (
        id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT,
        quantidade INTEGER
    );`
]

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        for (var table of SQL_TABLES_CREATE){
            database.run(table, (err) => {
                if (err) {
                    // Possivelmente a tabela já foi criada
                    console.log(err)
                } else {
                    console.log(table)
                }
            })
        }
    }
})

export default database
