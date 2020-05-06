/**
 * No javascript, ao criar uma varivel, ela passa a ser muito flexivel... Ao decorrer do tempo
 * o sistema vai ficando maior, essas variaveis começam a perder o tipo dela. No ts você consegue tipar ela
 * fortemente.
 */

//booleano
//let success = false; //forma implicita
var success: Boolean = false;

//numericos
let num: Number = 10;

//string
let nome: String = 'Nicolas Nathan Campos';

//array
//<Type> significa tipar o array que está informando
let arrayString: Array<String> = ['a', 'b', 'c']
let arrayNumber: Array<Number> = [1, 2, 4];
let arrayWhataver: Array<any> = ['a', 1, 'b', 2]

//enum
enum status_person {Solteiro, Casado, Divorciado};
let my_status_person: status_person = status_person.Solteiro;

console.log(success);
console.log(num);
console.log(nome);
console.log('========conjuntos de arrays=====')
console.log(arrayString);
console.log(arrayNumber);
console.log(arrayWhataver);
console.log('=======enum=======')
console.log(my_status_person == status_person.Solteiro ? 'Sou solteiro' : 'Sou outro');