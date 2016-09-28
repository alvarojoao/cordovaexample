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
    templateUrl: 'js/modules/authentication/templates/login.html'
  })
  .state('authenticate', {
      url: '/authenticate',
      templateUrl: 'js/modules/authentication/templates/authenticate.html'
    })
  .state('login', {
      url: '/login',
      templateUrl: 'js/modules/authentication/templates/login.html'
    })
  .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'js/modules/dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: "DashboardCtrl"
    })
  .state('indicadores', {
      url: '/indicadores',
      templateUrl: 'js/modules/dashboard/templates/indicadores.html'
    })
  .state('indicadores2', {
      url: '/indicadores2',
      templateUrl: 'js/modules/dashboard/templates/indicadores2.html'
    })
  .state('agenteVirtual', {
      url: '/agente-virtual',
      templateUrl: 'js/modules/atendimento/templates/agente-virtual.html',
      controller: 'AtendimentoCtrl',
      controllerAs: "AtendimentoCtrl"
    })
  .state('selfservice', {
      url: '/selfservice',
      templateUrl: 'js/modules/atendimento/templates/selfservice.html',
    })
  .state('profile', {
      url: '/profile',
      templateUrl: 'js/modules/dashboard/templates/profile.html',
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');


	}])
})();

