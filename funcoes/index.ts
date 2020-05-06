/*
Function normal
let soma = function(x, y){
    return x + y;
}*/

//function(x:type): type do retorno
const soma = function(x: number, y:number): number{
    return x+y;
}

const result = soma(2,4);
console.log(result);

//com o padrao do es6
const somaNovoPadrao = (x:number, y:number): number => {
    return x+y
}

console.log(somaNovoPadrao(2,4))