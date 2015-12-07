var sumarNumerosArreglo = function(arregloNumeros) {  
    
//    SI EL ARREGLO ES DE UN ELEMENTO, DEVUELVA EL ELEMENTO
    if (arregloNumeros.length === 1) {  
        return arregloNumeros[0];  
    }  
//    SI EL ARREGLO NO ES DE UN ELEMENTO HAGA LO SIGUIENTE
    else {  
        
        
//        CON EL METODO .POP() REGRESA EL ULTIMO VALOR DEL ARREGLO 
//        EJEMPLO 
//        
//        ARREGLO = [0,1,2,3,4,5]
//        
//        ARREGLO.POP DEVUELVE:
//        
//        5
//        
//        EL ARREGLO QUEDO ASI:
//        
//        [0,1,2,3,4]
//        
//        SI EJECUTO NUEVAMENTE
//        
//        ARREGLO.POP DEVUELVE:
//        
//        4
//        
//        EL ARREGLO QUEDO ASI:
//        
//        [0,1,2,3]
//        
        
        var ultimoNumeroArreglo = arregloNumeros.pop();
        console.log(ultimoNumeroArreglo);
        console.log(arregloNumeros);
        
        var suma = ultimoNumeroArreglo + sumarNumerosArreglo(arregloNumeros);
        return suma;
    }  
};  

console.log(sumarNumerosArreglo([1,2,3,4,5,6]));



