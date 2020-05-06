let my_name:any = "Nicolas Nathan Campos"
let count = (<string>my_name).length;

console.log(count);
console.log((my_name as string).length);

let obj = {
    nome: "sou nome"
};

(<any>obj).texto ="fui incluido"

console.log(obj);