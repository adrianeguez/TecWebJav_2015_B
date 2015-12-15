


applicacion.controller('usuariocontroller',['$scope','$http',function($scope,$http){
    
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
    
    
    
    
    
    
    
    
    
    
}]);