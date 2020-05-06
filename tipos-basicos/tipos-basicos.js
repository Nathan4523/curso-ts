/**
 * No javascript, ao criar uma varivel, ela passa a ser muito flexivel... Ao decorrer do tempo
 * o sistema vai ficando maior, essas variaveis começam a perder o tipo dela. No ts você consegue tipar ela
 * fortemente.
 */
//booleano
//let success = false; //forma implicita
var success = false;
//numericos
var num = 10;
//string
var nome = 'Nicolas Nathan Campos';
//array
//<Type> significa tipar o array que está informando
var arrayString = ['a', 'b', 'c'];
var arrayNumber = [1, 2, 4];
var arrayWhataver = ['a', 1, 'b', 2];
//enum
var status_person;
(function (status_person) {
    status_person[status_person["Solteiro"] = 0] = "Solteiro";
    status_person[status_person["Casado"] = 1] = "Casado";
    status_person[status_person["Divorciado"] = 2] = "Divorciado";
})(status_person || (status_person = {}));
;
var my_status_person = status_person.Solteiro;
console.log(success);
console.log(num);
console.log(nome);
console.log('========conjuntos de arrays=====');
console.log(arrayString);
console.log(arrayNumber);
console.log(arrayWhataver);
console.log('=======enum=======');
console.log(my_status_person == status_person.Solteiro ? 'Sou solteiro' : 'Sou outro');
