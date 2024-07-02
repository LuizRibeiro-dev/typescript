const leia = require("readline-sync");
import { Stack } from "../interface/Stack";
const pilha = new Stack<string>();

let nome, opcao;
let continua = true;

while(continua){
    
console.log("\n1 - Adicionar Livro na pilha");
console.log("2 - Listar todos os livros");
console.log("3 - Retirar Livros da pilha");
console.log("0 - Sair");

opcao = leia.questionInt("Entre com o codigo desejado: ")
while (opcao <0 || opcao >3 ){
    switch(opcao){
    case ("1" || "2" || "3" || "0"):
    break;
    default: 
    console.log("***Por favor, digite corretamente o codigo***\n");
    opcao = leia.questionInt("Entre com o codigo: ")}
    
}
if (opcao === 0) {continua = false} //Sair
if (opcao === 1) {nome = leia.question("\nDigite o nome: "), pilha.push(nome)} //Colocar livro na pilha
if (opcao === 2) { 
    if (pilha.isEmpty() == true) {console.log("\nNão ha livros na pilha")} 
    else {pilha.printStack()}} //Mostrar a fila
if (opcao === 3) {pilha.pop()} //Remover o primeiro da fila
}
console.log ("\nPilha:" ) 
pilha.printStack()