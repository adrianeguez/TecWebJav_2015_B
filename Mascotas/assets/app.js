


var applicacion = angular.module('app', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/home");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                "datos": {
                    templateUrl: "Angular/Rutas/datos.html",
                    controller: 'datoscontroller'
                },
                "lista": {
                    templateUrl: "Angular/Rutas/lista.html",
                    controller: 'listacontroller'
                },
                "home": {
                    templateUrl: "Angular/Rutas/home.html",
                    controller: 'homecontroller',
                }
            }
        })
        .state('usuario', {
            url: "/usuario",
            templateUrl: "Angular/Rutas/usuario.html",
            controller: 'usuariocontroller'
        })
    
    
    
    
        .state('mascotas', {
            url: "/mascotas/:idEntrenador",
            templateUrl: "Angular/Rutas/mascotas.html",
            controller: 'MascotasController'
        })
    
    
    
    
        .state('cuenta', {
            url: "/cuenta",
            templateUrl: "Angular/Rutas/cuenta.html",
            controller: 'cuentacontroller'
        })
        .state('cuenta.editar', {
            url: "/editar",
            templateUrl: "Angular/Rutas/editar.html",
            controller: 'editarcontroller'
        })
        .state('cuenta.borrar', {
            url: "/borrar",
            templateUrl: "Angular/Rutas/borrar.html",
            controller: 'borrarcontroller'
        });


});




