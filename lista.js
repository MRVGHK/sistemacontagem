// Este código é um requesito avaliativo da UC8.
// Aluno Erick Ferreira
// Curso: Programação FullStack

// Os objetivos desse código são:
// 1- Saber o número total de alunos.
// 2- Percorrer de 0 até o número total de alunos.
// 3- Verificar se é 0, par ou ímpar.

console.log("Hello Universe!!!")

let numeroAlunos = 10;

let listaAlunos = ["Erick","Pedro","Maria","Julio","Sandro","Carla","Lucas","Ana","Icaro","João"];

for(let contador = 0; contador < listaAlunos.length; contador++) {

    if(contador == 0 ) {                       // Igual: ==  Diferente: !=
        console.log(contador + ": Zero");      //Nota do Aluno: Concatenação. Variável + ": texto"
    } else if (contador % 2 == 1) {
        console.log (`${contador}: Ímpar`);    //Nota do Aluno: Interpolação. Utilizar crase !!!   
    } else {                                   //#### Pesquisar Template Strings ####
        console.log (contador + ": Par")       //Para alterar a contagem do FOR e exibir para o usuário
    }                                          //iniciando em 1. Concatenação ((contador + 1) + ": Zero")
}                                              //Interpolação: (`${contador + 1}: Ímpar`)
