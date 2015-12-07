function mystery() {
    var secret = 6;

    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return mystery2;
}
var hidden = mystery();
var result = hidden(3);
console.log(result);

//  LLAMA A mystery();

function mystery1() {
    var secret = 6;

    function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    }
    return function mystery2(multiplier) {
        multiplier *= 3;
        return secret * multiplier;
    };
}


// GUARDA mystery() EN hidden;

var hidden = function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
};

// EJECUTA HIDDEN CON EL PARAMETRO 3 

function mystery2(3) {
    3 *= 3;
    return 6 * 9; //54 FIN
    
// EL SECRET VA A VALER 6 POR QUE JAVASCRIPT RECUERDA A LAS VARIABLES Y FUNCIONES DE SU CONTEXTO
//    function mystery() {
//        var secret = 6; AQUI ESTA, SECRET VALE 6
//
//        function mystery2(multiplier) {
//            multiplier *= 3;
//            return secret * multiplier;
//        }
//        return mystery2;
//    }  

};