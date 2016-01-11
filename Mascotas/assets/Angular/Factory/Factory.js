


applicacion.factory('EntrenadorFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://localhost:1337/Entrenador/:idEntrenador',
    {
        idEntrenador:'@idEntrenador'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idEntrenador:'@idEntrenador'
                }
            
            }
         });
    
    return factory;
    
}]);




applicacion.factory('MascotaFactory',['$resource',function($resource){
    var factory = $resource(
        'http://localhost:1337/Mascota/:idMascota',
    {
        idMascota:'@idMascota'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idMascota:'@idMascota'
                }
            },
         busquedaPorIdEntrenador: 
            {
                url:'http://localhost:1337/Mascota?idEntrenador=:idEntrenador',
                method:'GET', 
                params:{
                    idEntrenador:'@idEntrenador'
                },
                isArray:true
            }
         });
    return factory;
}]);







