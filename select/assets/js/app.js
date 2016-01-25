var app = angular.module('pastel',[]);

app.controller('pastelCtrl',['$scope','$http',function($scope,$http){
    
    console.log('Hola Mundo');
    
    $http({
        method:'GET',
        url:'http://localhost:1337/ingrediente'
    }).then(
        function(respuesta)
        {
            console.log(respuesta);
            $scope.ingredientes= respuesta.data;
        },
        function(error)
        {
            console.log(error);
        });
    
    $http({
        method:'GET',
        url:'http://localhost:1337/pastel'
    }).then(
        function(respuesta)
        {
            console.log(respuesta);
            $scope.pasteles= respuesta.data;
        },
        function(error)
        {
            console.log(error);
        });
    
    
    
}])