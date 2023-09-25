// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

abstract class Ingresso {
    constructor(public valor: number) {}

    abstract imprimeValor(): void
}

class Normal extends Ingresso {
    imprimeValor(): void {
        console.log(`Valor do ingresso Normal: R$${this.valor}`)
    }
}

class VIP extends Ingresso {
    constructor(valor: number, public adicional: number) {
        super(valor)
    }

    imprimeValor(): void {
        const valorTotal = this.valor + this.adicional
        console.log(`Valor do ingresso VIP: R$${valorTotal} (Valor: R$${this.valor}, Adicional: R$${this.adicional})`)
    }
}

class Camarote extends Ingresso {
    constructor(valor: number, public adicional: number) {
        super(valor)
    }

    imprimeValor(): void {
        const valorTotal = this.valor + this.adicional
        console.log(`Valor do ingresso Camarote: R$${valorTotal} (Valor: R$${this.valor}, Adicional: R$${this.adicional})`)
    }
}

const ingressoNormal = new Normal(80)
const ingressoVIP = new VIP(90, 10)
const ingressoCamarote = new Camarote(100, 30)

console.log("Atividade 1:")

ingressoNormal.imprimeValor()
ingressoVIP.imprimeValor()
ingressoCamarote.imprimeValor()
console.log("--------------------------------------------");

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

class Imovel {
    constructor(public endereco: string, public preco: number) {}

    imprimePreco(): void {
        console.log(`Endereço: ${this.endereco}`)
        console.log(`Preço: R$${this.preco}`)
    }
}

class Novo extends Imovel {
    constructor(endereco: string, preco: number, public adicional: number) {
        super(endereco, preco)
    }

    imprimePreco(): void {
        super.imprimePreco()
        console.log(`Adicional no preço (Novo): R$${this.adicional}`)
    }

    getAdicional(): number {
        return this.adicional
    }
}

class Velho extends Imovel {
    constructor(endereco: string, preco: number, public desconto: number) {
        super(endereco, preco)
    }

    imprimePreco(): void {
        super.imprimePreco()
        console.log(`Desconto no preço (Velho): R$${this.desconto}`)
    }

    getDesconto(): number {
        return this.desconto
    }
}


const imovelNovo = new Novo("Avenida Paulista, 1578 - Bela Vista, São Paulo - SP", 3000000, 20000)
const imovelVelho = new Velho("Avenida Pedro Álvares Cabral, s/n - Vila Mariana - SP", 2000000, 10000)

console.log("Atividade 2:")

imovelNovo.imprimePreco()
console.log(`Valor adicional: R$${imovelNovo.getAdicional()}`)

imovelVelho.imprimePreco()
console.log(`Valor de desconto: R$${imovelVelho.getDesconto()}`)
console.log("------------------------------------------")

// 3. Dado o seguinte diagrama:

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

class Animal {
    constructor(public nome: string, public idade: number, public tipo: string) {}

    comer(): void {
        console.log(`${this.nome} está comendo.`)
    }

    dormir(): void {
        console.log(`${this.nome} está dormindo.`)
    }
}

class Cachorro extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Cachorro')
    }

    latir(): void {
        console.log(`${this.nome} está latindo.`)
    }
}

class Cavalo extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Cavalo')
    }

    galopar(): void {
        console.log(`${this.nome} está galopando.`)
    }
}

class Gato extends Animal {
    constructor(nome: string, idade: number) {
        super(nome, idade, 'Gato')
    }

    miar(): void {
        console.log(`${this.nome} está miando.`)
    }
}


const cachorro = new Cachorro('Tobe', 8)
const cavalo = new Cavalo('Pé de Pano', 6)
const gato = new Gato('Frajola', 1)

console.log("Atividade 3:")

cachorro.comer()
cachorro.latir()

cavalo.comer()
cavalo.galopar()

gato.comer()
gato.miar()
