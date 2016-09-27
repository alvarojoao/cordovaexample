(function () {

    angular.module('myApp.dashboard')
    .controller('DashboardCtrl',  DashboardController);

    DashboardController.$inject = ['numberGeneratorService','$ionicNavBarDelegate'];

    function DashboardController(numberGeneratorService,$ionicNavBarDelegate) {

        vm = this;

        //API
     $ionicNavBarDelegate.showBackButton(false);


    };

})();