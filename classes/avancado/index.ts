interface AnimalInterface {
    name: string;
    color: string;
    sex?: string;
    correr();
    andar();
}

class Animal implements AnimalInterface {
    constructor(public name: string, public color: string) { }

    public correr() {
        console.log('eu corri')
    }

    public andar() {
        console.log('eu andei')
    }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    public pular() {
        //super é como se fosse um this somente da herança
        super.correr();
        console.log('eu acabei de pular');
        this.fazerEsporte(this.name);
    }

    private fazerEsporte(name: string) {
        let status: string;
        status = `o ${name} perdeu 5kg`
        return console.log(status);
    }
}

let coelho: Coelho = new Coelho('James', 'preto')

console.log(`O ${coelho.name} está com a cor ${coelho.color}`);
coelho.andar();
coelho.correr();
coelho.pular();