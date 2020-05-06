var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.correr = function () {
        console.log('eu corri');
    };
    Animal.prototype.andar = function () {
        console.log('eu andei');
    };
    return Animal;
}());
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.pular = function () {
        //super é como se fosse um this somente da herança
        _super.prototype.correr.call(this);
        console.log('eu acabei de pular');
        this.fazerEsporte(this.name);
    };
    Coelho.prototype.fazerEsporte = function (name) {
        var status;
        status = "o " + name + " perdeu 5kg";
        return console.log(status);
    };
    return Coelho;
}(Animal));
var coelho = new Coelho('James', 'preto');
console.log("O " + coelho.name + " est\u00E1 com a cor " + coelho.color);
coelho.andar();
coelho.correr();
coelho.pular();
