const dados = {
    nome: "Carlos",
    idade: 20,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}
console.log(`O usuário ${dados.nome} tem 32 anos e usa a tecnologia ${dados.tecnologias[0].nome} com especialidade em ${dados.tecnologias[0].especialidade}`)