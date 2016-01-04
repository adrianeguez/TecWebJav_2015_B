


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
    
    
    
//    return {
//        save:function(){
//            return usuarioGuardado
//        },
//        delete:function(){
//            return usuarioBorrado
//        },
//        actualizar: function(){
//            return usuarioBorrado
//        },
//        buscarPorID: function(id){
//            return usuarioBorrado
//        },
//        buscarPorNombre: function(nombre){
//            return usuarioBorrado
//        }
//    }
    
    
    
    
    
    
    
    
}]);











