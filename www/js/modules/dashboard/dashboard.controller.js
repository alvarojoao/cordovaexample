(function () {

    angular.module('myApp.dashboard')
    .controller('DashboardCtrl',  DashboardController);

    DashboardController.$inject = ['numberGeneratorService','$ionicNavBarDelegate','$rootScope'];

    function DashboardController(numberGeneratorService,$ionicNavBarDelegate,$rootScope) {

        vm = this;

        //API
     $ionicNavBarDelegate.showBackButton(false);
     vm.redirect = function(){
        window.open('http://poc.looqbox.com/nta/', '_system', 'location=yes');
    };

    };

})();