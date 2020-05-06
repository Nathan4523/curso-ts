/*modelo antigo
 class Animal {
     name: string;
     color:string;
     constructor(name: string, color:string) {
         this.name = name
     }
 }*/
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.mostrar = function () {
        console.log(this.name + " est\u00E1 na cor " + this.color);
    };
    return Animal;
}());
var myAnimal = new Animal('Coelho', 'branco');
console.log(myAnimal.name);
console.log(myAnimal.color);
myAnimal.mostrar();
