/*modelo antigo
 class Animal {
     name: string;
     color:string;
     constructor(name: string, color:string) {
         this.name = name
     }
 }*/

 class Animal{
     constructor(public name:string, public color:string){}

     public mostrar(){
        console.log(`${this.name} está na cor ${this.color}`)
     }
 }

let myAnimal: Animal = new Animal('Coelho', 'branco');

console.log(myAnimal.name);
console.log(myAnimal.color);
myAnimal.mostrar();