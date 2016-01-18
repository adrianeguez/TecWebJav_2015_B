


var applicacion = angular.module('prueba', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/vista1");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('vista1', {
            url: "/vista1",
            templateUrl: "Angular/Rutas/vista1.html",
            controller: 'vista1controller'
        })
        .state('vista2', {
            url: "/vista2",
            templateUrl: "Angular/Rutas/vista2.html",
            controller: 'vista2controller'
        });


});




