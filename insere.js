const db=require('./conexao')

async function inserirDados(){
    await db.connect()
    const novoAluno="insert into alunos (nome_alunos) values($1)"
    await db.query(novoAluno,['joana'])
    const novoCurso="insert into cursos (nome_cursos) values($1)"
    await db.query(novoCurso,['pedagogia'])
    console.log("Inserção realizada")
    await db.end()
}
inserirDados()