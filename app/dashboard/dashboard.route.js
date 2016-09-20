(function () {
    angular.module('myApp.dashboard')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('dashboard', {
                url: '/dashboard',
                views: {
                    "main": {
                        controller: 'DashboardCtrl as dashboardCtrl',
                        templateUrl: 'dashboard/dashboard.tpl.html'
                    }
                },
                data: {pageTitle: 'Numbers'}
            });
        }])
})();