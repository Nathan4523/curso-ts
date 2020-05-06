//let myArray: Array<number> = [];
/**
 * O <t> significa que o tipo de variavel que eu definir no retorno da funcao, será o tipo da funcao
 * Ou seja, se a varivavel for number, logo a funcao tem que receber e retornar qualquer coisa do tipo number
 */
function funcao(param) {
    return param;
}
//const result:string = funcao(1); // error
var result = funcao(2);
console.log(result);
