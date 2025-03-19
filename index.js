class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        let ataque = ataques[this.tipo] || "um ataque desconhecido";
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Instancias de Hero

let hero1 = new hero("Arthas", 30, "guerreiro");
let hero2 = new hero("Gandalf", 200, "mago");
let hero3 = new hero("Avatar", 16, "monge");
let hero4 = new hero("Shinobi", 38, "ninja");

// Usando o método atacar

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();