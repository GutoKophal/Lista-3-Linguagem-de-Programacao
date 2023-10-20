interface ItemColecao<T, V> {
    valor: T;
    categoria: V;
  }
  
  function mostrarItem<T, V>(item: ItemColecao<T, V>): void {
    console.log(`Valor: ${item.valor}`);
    console.log(`Categoria: ${item.categoria}`);
  }
  
  // Exemplo de uso
  const item1: ItemColecao<number, string> = {
    valor: 42,
    categoria: "Número",
  };
  
  const item2: ItemColecao<string, string> = {
    valor: "Maçã",
    categoria: "Fruta",
  };
  
  mostrarItem(item1);
  mostrarItem(item2);