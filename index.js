var BEM = /** @class */ (function () {
    //constructor, inicializador
    function BEM(b, aE, aM) {
        var _this = this;
        this.jointBEM = function (b, aE, aM) {
            if (_this.checkEmptyBlock(b) === "full") {
                //"block":
                if (_this.checkEmptyArray(aE) === "empty" && _this.checkEmptyArray(aM) === "empty") {
                    var res = b;
                    return console.log(res);
                }
                //"block__element":
                else if (_this.checkEmptyArray(aE) === "full" && _this.checkEmptyArray(aM) === "empty") {
                    var res = b + "__" + aE;
                    return console.log(res);
                }
                //"block--modifier":
                else if (_this.checkEmptyArray(aE) === "empty" && _this.checkEmptyArray(aM) === "full") {
                    var res = b + "--" + aM;
                    return console.log(res);
                }
                //block__element--modifier:
                else if (_this.checkEmptyArray(aE) === "full" && _this.checkEmptyArray(aM) === "full") {
                    var res = b + "__" + aE + "--" + aM;
                    return console.log(res);
                }
            }
            else {
                console.log("There's no block, end of program.");
            }
        };
        //assing the values to the properties
        this.block = b;
        this.element = aE;
        this.modifier = aM;
    } //whenever we create an BEM object its gonna take those properties and values
    //method of the object
    BEM.prototype.checkEmptyBlock = function (b) {
        if (b.length === 0) {
            return "empty";
        }
        else {
            return "full";
        }
    };
    //method of the object
    BEM.prototype.checkEmptyArray = function (array) {
        if (array.length === 0) {
            return "empty";
        }
        else {
            //si es diferente a 0 checa si hay ""
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var x = array_1[_i];
                //recorre cada elemento del array para ver si hay un ""
                if (x === "") {
                    return "empty";
                }
                else {
                    return "full";
                    //console.log("lleno: "+ x); //devuelve el primer elemento si no es, debe tener una palabra nomas?
                }
            }
        }
    };
    return BEM;
}());
//instanciar clase
var bem1 = new BEM("boton", ["precio"], ["rojo"]);
bem1.jointBEM("boton", [""], ["red"]);
//console.log(res);
