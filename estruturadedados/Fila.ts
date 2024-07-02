import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <=10; i++){
    fila.enqueue(i)
}

console.log("\nexibir conteudo da fila: ")

fila.printQueue();

console.log("\nRemove elemento" + fila.dequeue());

fila.printQueue();

console.log("\nproximo da fila" + fila.peek());

fila.printQueue();

console.log("\n4 está na fila" + fila.contains(4));

fila.printQueue();

console.log("\nfila esta vazia?" + fila.isEmpty());

fila.printQueue();