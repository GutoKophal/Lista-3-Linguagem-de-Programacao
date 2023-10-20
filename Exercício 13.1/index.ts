interface Veiculo {
    marca: string;
    modelo: string;
    ligar(): void;
  }
  
  class Carro implements Veiculo {
    constructor(public marca: string, public modelo: string) {}
  
    ligar(): void {
      console.log(`O ${this.marca} ${this.modelo} está ligado.`);
    }
  }
  
  // Exemplo de uso
  const meuCarro = new Carro("Toyota", "Corolla");
  meuCarro.ligar(); // Saída: O Toyota Corolla está ligado.
  