


applicacion.controller('usuariocontroller',['$scope','$http',function($scope,$http){
    
//    $scope.nombrePersonal = "Pepito";
    
    $scope. nuevoUsuario = {
        nombre:'',
        apellido:'',
        fechaNacimiento:''
    }
    
    $scope.agregarNuevoEntrenador = function(){
        
        $http({
            method:'POST',
            url:'http://localhost:1337/Entrenador',
            data:{
                nombre: $scope.nuevoUsuario.nombre,
                apellido: $scope.nuevoUsuario.apellido,
                fechaNacimiento: $scope.nuevoUsuario.fechaNacimiento
            }
        }).then(
        function correctoLlamoEntrenadores(respuesta){
            
            console.log(respuesta);
            
            $scope.entrenadores.push(respuesta.data);
            
            $scope. nuevoUsuario = {
                                        nombre:'',
                                        apellido:'',
                                        fechaNacimiento:''
                                    }
            
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
        });
        
        
        
        
    }
    
    
    console.log('Entraste a usuario');
    
    $http({
        method:'GET',
        url:'http://localhost:1337/Entrenador'
    }).then(
        function correctoLlamoEntrenadores(respuesta){
             console.log(respuesta);
            
            $scope.entrenadores = respuesta.data;
            
            console.log($scope.entrenadores);
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
        });
    
    
    $scope.editarEntrenador = function (entrenador, indice){
        console.log(entrenador);
        console.log(indice);
        var fecha;

        if(entrenador.nuevaFecha==null)
            {
                fecha = $scope.entrenadores[indice].fechaNacimiento;    
            }
        else
        {
            
            fecha = entrenador.nuevaFecha;
            
        }
        
        $http({
            method:'PUT',
            url:'http://localhost:1337/Entrenador/'+entrenador.id,
            data:{
                nombre: entrenador.nombre,
                apellido: entrenador.apellido,
                fechaNacimiento: fecha
            }
        }).then(
        function correctoLlamoEntrenadores(respuesta){
            
             console.log(respuesta);
            $scope.entrenadores[indice].fechaNacimiento=fecha;
            
            
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
        });
    };
    
    
    
    
    
    
    
}]);












