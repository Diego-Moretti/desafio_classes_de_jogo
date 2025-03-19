class Hero:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        }

        ataque = ataques.get(self.tipo, "um ataque desconhecido")
        print(f"O {self.tipo} atacou usando {ataque}")


# Instâncias de Hero
hero1 = Hero("Arthas", 30, "guerreiro")
hero2 = Hero("Gandalf", 200, "mago")
hero3 = Hero("Avatar", 16, "monge")
hero4 = Hero("Shinobi", 38, "ninja")

# Usando o método atacar
hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
