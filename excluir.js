const db=require('./conexao')

async function excluirRegistro(){
    await db.connect()
    const excluir="delete from alunos where id_alunos=2 "
    await db.query(excluir)
    await db.end()
    console.log("deu boa")
}
excluirRegistro()