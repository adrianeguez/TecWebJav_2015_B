function thisIsWeird() {

    function secret() {
        console.log('unused3 ');
        var unused3;
    }

    var result;

    function secret() {
        console.log('unused1 ');
        var unused1;
    }

    result = secret;

    function secret() {
        console.log('unused2 ');
        var unused2;
    }

    return result;
}

console.log(thisIsWeird()());

// PASO 1 MOVER LAS FUNCIONES Y VARIABLES ARRIBA

function thisIsWeird() {

    function secret() {
        console.log('unused3 ');
        var unused3;
    }

    var result;

    function secret() {
        console.log('unused1 ');
        var unused1;
    }
    
    function secret() {
        console.log('unused2 ');
        var unused2;
    }

    result = secret;
    
    return result;
}

//PASO 2 DEVOLVER LA FUNCION SECRET, EN ESTE CASO DEVUELVE SECRET CON UNUSED 2
//YA QUE ES LA QUE ESTA DEFINIDA AL ULTIMO

function thisIsWeird() {
//    PRIMERO ESTA DEFIINIDA UNUSED 3
    function secret() {
        console.log('unused3 ');
        var unused3;
    }

    var result;

//    PRIMERO ESTA DEFIINIDA UNUSED 1
    function secret() {
        console.log('unused1 ');
        var unused1;
    }

//    PRIMERO ESTA DEFIINIDA UNUSED 2
    function secret() {
        console.log('unused2 ');
        var unused2;
    }

    result = function secret() {
        console.log('unused2 ');
        var unused2;
    };

    return result;
}