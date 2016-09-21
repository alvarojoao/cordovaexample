(function () {
    angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'modules/home/templates/home.html'
  })
  .state('authenticate', {
      url: '/authenticate',
      templateUrl: 'modules/authentication/templates/authenticate.html'
    })
  .state('login', {
      url: '/login',
      templateUrl: 'modules/authentication/templates/login.html'
    })
  .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/templates/dashboard.html'
    })
  .state('indicadores', {
      url: '/indicadores',
      templateUrl: 'modules/dashboard/templates/indicadores.html'
    })
  .state('agenteVirtual', {
      url: '/agente-virtual',
      templateUrl: 'modules/atendimento/templates/agente-virtual.html'
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');


	}])
})();

