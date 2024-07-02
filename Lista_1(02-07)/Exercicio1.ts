const leia = require("readline-sync");
import { Queue } from "../interface/Queue";

const fila = new Queue<string>();

let nome, opcao;
let continua = true;

while(continua){
    
console.log("\n1 - Adicionar Clientes na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
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
if (opcao === 1) {nome = leia.question("\nDigite o nome: "), fila.enqueue(nome)} //Colocar cliente na fila
if (opcao === 2) { 
    if (fila.isEmpty() == true) {console.log("\nNão ha clientes na fila")} 
    else {fila.printQueue()}} //Mostrar a fila
if (opcao === 3) {fila.dequeue()} //Remover o primeiro da fila
}
console.log ("\nFila:" ) 
fila.printQueue()