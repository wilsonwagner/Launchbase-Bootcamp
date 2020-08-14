const nome = "Silvana";
const sexo = "M";
const idade = 60;
const contribuicao = 35;

const total = idade+contribuicao

if (total >= 85){
    if (contribuicao >= 35 && sexo == "M" && total >= 95){
        console.log(`${nome} você pode se aposentar.`)
    } else if (contribuicao >= 30 && sexo == "F" && total >= 85) {
        console.log(`${nome} você pode se aposentar.`)
    } else {
        console.log(`${nome} você ainda não pode se aposentar.`)
    }
} else{
    console.log(`${nome} você ainda não pode se aposentar.`)
}