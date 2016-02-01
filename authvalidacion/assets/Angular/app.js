var app = angular.module('app', ['ui.router','ngCookies']);

app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('entro config');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Rutas/home.html',
            controller: 'homeCtrl',
            data: {
                nivelAcceso: 0,
                loginRequerido: false
            }

        })
        .state('login', {
            url: '/login',
            templateUrl: 'Rutas/login.html',
            controller: 'loginCtrl',
            data: {
                nivelAcceso: 0,
                loginRequerido: false
            }
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'Rutas/admin.html',
            controller: 'adminCtrl',
            data: {
                nivelAcceso: 2,
                loginRequerido: true
            }
        })
        .state('user', {
            url: '/user',
            templateUrl: 'Rutas/user.html',
            controller: 'userCtrl',
            data: {
                nivelAcceso: 1,
                loginRequerido: true
            }
        })


});

app.run(function ($rootScope, $cookies, $state) {
    console.log('entro run');

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        var requiereLogin = toState.data.loginRequerido;
        var nivelAcceso = toState.data.nivelAcceso;

        if (requiereLogin) {
            console.log('Si require Login');
            if ($cookies.get('UsuarioId')) {
                console.log('hizo Login');
                
                console.log(nivelAcceso);
                if (nivelAcceso == 1 && $cookies.get('UsuarioTipo') == 1) {
                    console.log('puede entrar')
                        //                    event.preventDefault();
                        //                    return $state.go('user')
                } else {
                    if (nivelAcceso == 2 && $cookies.get('UsuarioTipo') == 2) {
                         console.log('puede entrar')
                    } else {
                        event.preventDefault();
                        return $state.go('login')
                    }

                }
             

            } else {
                console.log('No ha hecho Login');
                event.preventDefault();
                return $state.go('login')
            }
        } else {
            console.log('No requiere login');
        }

    });

});