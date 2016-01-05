

applicacion.controller('MascotasController',['$scope','$stateParams','EntrenadorFactory',function($scope, $stateParams, EntrenadorFactory){
    
    
    console.log('Parametro Id Entrenador');
    console.log($stateParams.idEntrenador);
    
    
    
    $scope.parametroIdEntrenador = $stateParams.idEntrenador;
    
    
    
    $scope.existeUsuario = false;
    
    EntrenadorFactory.get({
        id:$stateParams.idEntrenador
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existeUsuario = true;
            $scope.usuario = respuesta; 
            console.log($scope.usuario);
        },
        function error(error)
        {
            $scope.existeUsuario = false;
            $scope.error = "No existe ese usuario";
        });
    
    
    
    
    
}]);