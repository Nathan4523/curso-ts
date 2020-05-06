/**
 * Trabalhar com interfaces, protege seus atributos protegidos
 */

interface ObjectInterface {
    category: string;
    product: string;
    obrigado?: boolean
}

//quando inseiro ?: significa que não sou obrigado a passar

function show(obj: ObjectInterface) {
    console.log(obj.category)
    console.log(obj.product)
}

show({ category: "categoria", product: "produto" });


// interfaces ligadas a classes

class Product implements ObjectInterface {
    category: string;
    product: string
}

let prod = new Product();
prod.category = "Nova categoria"
prod.product = 'Novo produto';

console.log(prod.category)
console.log(prod.product)