const db=require('./conexao')

async function atualizaRegistro(){
    await db.connect()
    const atualiza="update alunos set nome_alunos='Maria do Bairro' where nome_alunosg='joaquim'"
    await db.query(atualiza)
    await db.end()
    console.log("Alterado com sucesso")
}

atualizaRegistro()