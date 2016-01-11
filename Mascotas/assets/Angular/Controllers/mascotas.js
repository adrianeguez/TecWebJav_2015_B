

applicacion.controller('MascotasController',['$scope','$stateParams','EntrenadorFactory','MascotaFactory',function($scope, $stateParams, EntrenadorFactory, MascotaFactory){
    
    
    console.log('Parametro Id Entrenador');
    console.log($stateParams.idEntrenador);
    
    
    
    $scope.parametroIdEntrenador = $stateParams.idEntrenador;
    //CONTROLADOR MASCOTA.JS
    MascotaFactory.busquedaPorIdEntrenador(
        {
            idEntrenador:$stateParams.idEntrenador
        }).$promise.then(
        function success(respuesta)
        {
            $scope.mascotas = respuesta; 
            console.log('Llegaron las Mascotas');
            console.log(respuesta);
        },
        function error(error)
        {
            console.log(error);
        });
    
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