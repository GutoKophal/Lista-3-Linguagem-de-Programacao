// Definindo a interface Pedido
interface Pedido {
    id: number;
    estado: "pendente" | "enviado" | "entregue";
}

// Função para atualizar o estado de um pedido
function atualizaStatus(pedido: Pedido, novoEstado: "pendente" | "enviado" | "entregue"): void {
    pedido.estado = novoEstado;
    console.log(`O pedido de número ${pedido.id} teve seu estado alterado para ${novoEstado}.`);
}

// Exemplo de uso
const meuPedido: Pedido = {
    id: 1,
    estado: "pendente"
};

console.log(`Estado inicial do pedido: ${meuPedido.estado}`);
atualizaStatus(meuPedido, "enviado");
console.log(`Novo estado do pedido: ${meuPedido.estado}`);
