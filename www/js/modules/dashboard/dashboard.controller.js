(function () {

    angular.module('myApp.dashboard')
    .controller('DashboardCtrl',  DashboardController);

    DashboardController.$inject = ['numberGeneratorService'];

    function DashboardController(numberGeneratorService) {

        vm = this;

        //API


    };

})();