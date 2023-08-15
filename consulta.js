const db=require('./conexao')

async function listar(){
await db.connect()
resultado=await db.query('select * from cursos')
resultado1=await db.query('select * from alunos')
console.log(resultado.rows)
console.log(resultado1.rows)
await db.end()

}

listar()
