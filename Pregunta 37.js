function mystery(input) {
    var secret = 5;

    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}
var hidden = mystery(4);
var result = hidden(2);

//HIDDEN LLAMA A MISTERY

function mysteryPaso1(input) {
    var secret = 5;

    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    };
}

// MYSTERI DEVUELVE MYSTERY2 Y ASIGNA LAS VARIABLES QUE TIENE COMO CONTEXTO,
// EN ESTE CASO INPUT = 4 Y SECRE = 5

function mystery2(multiplier) {
    multiplier *= 4;
    return 5 * multiplier;
}

//HIDDEN VA A SER IGUAL A LO QUE DEVUELVE MYSTERY QUE ES MYSTERY 2 CON LAS VARIABLES

var hidden = function mystery2(multiplier) {
    multiplier *= 4;
    return 5 * multiplier;
}

//RESULTA LLAMA A HIDDEN CON EL PARAMETO 2 

var result = unction mystery2(2) {
    2 *= 4;
    return 5 * 8; //RESULTADO ES 40
}




