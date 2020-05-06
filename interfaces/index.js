/**
 * Trabalhar com interfaces, protege seus atributos protegidos
 */
//quando inseiro ?: significa que não sou obrigado a passar
function show(obj) {
    console.log(obj.category);
    console.log(obj.product);
}
show({ category: "categoria", product: "produto" });
// interfaces ligadas a classes
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var prod = new Product();
prod.category = "Nova categoria";
prod.product = 'Novo produto';
console.log(prod.category);
console.log(prod.product);
