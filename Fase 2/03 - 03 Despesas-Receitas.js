const users2 = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: "Wilson",
    receitas: [50,50,50,50],
    despesas: [50,50,50,50,50]
  },
  {
    nome: "Gilson",
    receitas: [50,50,50,50,50],
    despesas: [50,50,50,50]
  }
]

// FUNÇÃO para somar os números de uma array!
function somaNumeros(usuario){
    total = 0
    for (let valores of usuario){
        total += valores
    }
    return total
}

//Função que utiliza a função somaNumeros() para checar o valor final (resultado-despesas)
function calculaSaldo(receitas, despesas) {
    lucro = somaNumeros(receitas)
    gastos = somaNumeros(despesas)
    return lucro-gastos
}

for (let x = 0; x < users2.length; x++){
    if (calculaSaldo(users2[x].receitas, users2[x].despesas) > 0){
        console.log(`${users2[x].nome} possui saldo POSITIVO de ${calculaSaldo(users2[x].receitas, users2[x].despesas)}`)
    } else {
        console.log(`${users2[x].nome} possui saldo NEGATIVO de ${calculaSaldo(users2[x].receitas, users2[x].despesas)}`)
    }
}
