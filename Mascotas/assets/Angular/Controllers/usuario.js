




applicacion.controller('usuariocontroller',['$scope','$http','EntrenadorFactory','toastr',function($scope, $http, EntrenadorFactory,toastr){
    
    toastr.info('Info', 'Se cargo la vista Usuario');
    
//    $scope.nombrePersonal = "Pepito";
    
    $scope. nuevoUsuario = {
        nombre:'',
        apellido:'',
        fechaNacimiento:''
    }
    
    $scope.agregarNuevoEntrenador = function(){
        
        EntrenadorFactory.save({
            nombre: $scope.nuevoUsuario.nombre,
            apellido: $scope.nuevoUsuario.apellido,
            fechaNacimiento: $scope.nuevoUsuario.fechaNacimiento
        })
        .$promise.then(
        function correctoLlamoEntrenadores(respuesta){
            toastr.success('Exito', 'Se registro el usuario: '+respuesta.nombre);
            console.log(respuesta);
            //$scope.entrenadores.push(respuesta.data);
            $scope.entrenadores.push(respuesta);
            $scope. nuevoUsuario = {
                                        nombre:'',
                                        apellido:'',
                                        fechaNacimiento:''
                                    };
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
        });
        
//        $http({
//            method:'POST',
//            url:'http://localhost:1337/Entrenador',
//            data:{
//                nombre: $scope.nuevoUsuario.nombre,
//                apellido: $scope.nuevoUsuario.apellido,
//                fechaNacimiento: $scope.nuevoUsuario.fechaNacimiento
//            }
//        }).then(
//        function correctoLlamoEntrenadores(respuesta){
//            
//            console.log(respuesta);
//            
//            $scope.entrenadores.push(respuesta.data);
//            
//            $scope. nuevoUsuario = {
//                                        nombre:'',
//                                        apellido:'',
//                                        fechaNacimiento:''
//                                    }
//
//        },
//        function errorNoLlamoEntrenadores(error){
//            console.log(error);
//        });
        
        
        
        
    }
    
    
    console.log('Entraste a usuario');
    
    EntrenadorFactory.query().$promise.then(        
        function correctoLlamoEntrenadores(respuesta){
             console.log(respuesta);
            toastr.success('Exito', 'Se recobraron: '+respuesta.length+' Entrenadores');
            // $scope.entrenadores = respuesta.data;
            $scope.entrenadores = respuesta;
            
            console.log($scope.entrenadores);
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
            toastr.error('Error', 'Error inesperado del servidor');
        });
    /*$http({
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
    */
    
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
        
        EntrenadorFactory.actualizar(
            {
                idEntrenador: entrenador.id
            },
            {
                nombre: entrenador.nombre,
                apellido: entrenador.apellido,
                fechaNacimiento: fecha
            }).$promise.then(
                function correctoLlamoEntrenadores(respuesta){
                    console.log(respuesta);
                    $scope.entrenadores[indice].fechaNacimiento=fecha;            
                },
                function errorNoLlamoEntrenadores(error){
                    console.log(error);
                });
        
        
        
//        $http({
//            method:'PUT',
//            url:'http://localhost:1337/Entrenador/'+entrenador.id,
//            data:{
//                nombre: entrenador.nombre,
//                apellido: entrenador.apellido,
//                fechaNacimiento: fecha
//            }
//        }).then(
//        function correctoLlamoEntrenadores(respuesta){
//            
//             console.log(respuesta);
//            $scope.entrenadores[indice].fechaNacimiento=fecha;
//            
//            
//        },
//        function errorNoLlamoEntrenadores(error){
//            console.log(error);
//        });
        
        
    };
    
    
    
    $scope.borrarEntrenador = function borrarEntrenador(id, indice){
        
        console.log(id);
        
        EntrenadorFactory.delete({
            idEntrenador: id
        }).$promise.then(
            function success(respuesta)
            {
                console.log(respuesta);
                $scope.entrenadores.splice(indice, 1);
            },
            function error(error)
            {
                console.log(error);
            }
        )
        
        
        
    }
    
    
    
}]);












