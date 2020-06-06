const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

//Função receber transações:
function createTransaction(transaction){
    user.transactions.push(transaction)
    if (transaction.type == "credit"){
        user.balance += transaction.value
    } else if (transaction.type == "debit"){
        user.balance -= transaction.value
    }
}

// Retorna o objeto da transação de maior valor com aquele tipo.
function getHigherTransactionByType(creditOrDebit){
    total = 0
    for (let transaction of user.transactions){
        if (transaction.type == creditOrDebit){
            if (transaction.value > total){
                total = transaction.value
            }
        }
    }
    console.log({type: creditOrDebit, value: total})
}
// Pega a média do usuário sem se importar se é débito ou crédito.
function getAverageTransactionValue(){
    let total = 0
    let dividir = 0
    for (let transaction of user.transactions){
        total += transaction.value
        dividir += 1
    }
    console.log(`A média foi de ${total/dividir}`)
}
function getTransactionsCount(){
    let credit = 0
    let debit = 0
    for (let transaction of user.transactions){
        if (transaction.type == "credit"){
            credit += 1
        } else if (transaction.type == "debit"){
            debit += 1
        }
    }
    const objetos = {credits:credit, debits: debit}
    console.log(objetos)
}
// CÓDIGO PARA RODAR:
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }