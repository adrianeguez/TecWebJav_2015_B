    app.controller('homeCtrl', ['$scope', function ($scope) {


}]);

    app.controller('adminCtrl', ['$scope', function ($scope) {


}]);

    app.controller('userCtrl', ['$scope', function ($scope) {


}]);

    app.controller('loginCtrl', ['$scope','$rootScope', '$http','$state','$cookies', function ($scope,$rootScope, $http ,$state,$cookies) {

        $scope.user = {
            usuario: '',
            password: ''
        }

        $scope.login = function () {

            $http({
                method: 'POST',
                url: '/Usuario/login',
                data: {
                    usuario: $scope.user.usuario,
                    password: $scope.user.password
                }
            }).then(
                function (respuesta) {
                      
                    $cookies.put('UsuarioTipo', respuesta.data.tipo);
                    $cookies.put('UsuarioId', respuesta.data.id);
                    
//                    $rootScope.usuario = ;
                    if(respuesta.data.tipo==1){
                        $state.go('user');
                    }
                    if(respuesta.data.tipo==2){
                        $state.go('admin');
                    }
                    
                    console.log(respuesta.data);
                },
                function (error) {
                    console.log(error);
                }


            );
        }




                }]);