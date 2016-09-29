(function () {

    angular.module('myApp.dashboard')
    .controller('IndicatorsCtrl',  IndicatorsController);

    IndicatorsController.$inject = ['numberGeneratorService','$ionicNavBarDelegate','$rootScope'];

    function IndicatorsController(numberGeneratorService,$ionicNavBarDelegate,$rootScope) {

        vm = this;

        //API
     $ionicNavBarDelegate.showBackButton(true);

    };

})();