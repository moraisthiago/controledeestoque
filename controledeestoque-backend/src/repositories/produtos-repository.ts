import Produto from "../models/produto";
import database from "./database";

const produtosRepository = {
    criar: (produto: Produto, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO produtos (nome, descricao, quantidade) VALUES (?, ?, ?)'
        const params = [produto.nome, produto.descricao, produto.quantidade]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (produtos: Produto[]) => void) => {
        const sql = 'SELECT * FROM produtos'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },
    lerTodosPorEstoque: (id: number, callback: (produtos: Produto[]) => void) => {
        const sql = 'SELECT * FROM produtos WHERE id_estoque = ?'
        const params = [id]
        database.all(sql, params, (_err, rows) => callback(rows))
    },
    ler: (id: number, callback: (produto?: Produto) => void) => {
        const sql = 'SELECT * FROM produtos WHERE id_produto = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },
    atualizar: (id: number, produto: Produto, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE produtos SET nome = ?, descricao = ?, quantidade = ? WHERE id_produto = ?'
        const params = [produto.nome, produto.descricao, produto.quantidade, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM produtos WHERE id_produto = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default produtosRepository