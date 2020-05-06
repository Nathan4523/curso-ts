//let myArray: Array<number> = [];

/**
 * O <t> significa que o tipo de variavel que eu definir no retorno da funcao, será o tipo da funcao
 * Ou seja, se a varivavel for number, logo a funcao tem que receber e retornar qualquer coisa do tipo number
 */
function funcao<T>(param: T): T {
    return param;
}

//const result:string = funcao(1); // error
const result: number = funcao(2);

console.log(result);

//A minha class lista fica flexivel a tipagem... se o objeto criado for number, tudo receber do tipo number
class Lista<T>{
    item = [];

    add(item:T){

    }

    remove(item:T){

    }
}

let list = new Lista<string>();

list.add('Nicolas')