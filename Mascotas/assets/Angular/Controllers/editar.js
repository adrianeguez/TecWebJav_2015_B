

applicacion.controller('editarcontroller',['$scope','$timeout',function($scope,$timeout){
    console.log('Entraste a editar');
    
    $scope.claseHeader = 'bounce';
    
    $scope.moverEditar = function(){
        $scope.claseHeader = 'bounceIn';
        console.log('Empieza la funcion');
        
        
        $timeout(function(){
            console.log('Ejecuto despues de 1 seg');
            $scope.claseHeader = '';
//            $scope.$apply();
        },1000);
    }
}]);





















