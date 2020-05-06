/*É perigoso ter variaveis com mesmo nome, por padrão o javascript entende que é para ser alterada
* Com o ts, é possivel manipular cada uma e cada uma tem seu tempo de vida
*/

function showWithVar(){
    var text = 'Nicolas Campos';

    if(true){
        var text = 'texto';
    }

    console.log(text);
}

function showWithLet(){
    let text:String;
    text = 'Nicolas Campos';

    if(true){
        let text:String;
        text = '1';
        console.log(text)
    }

    console.log(text);
}

showWithVar();
showWithLet();