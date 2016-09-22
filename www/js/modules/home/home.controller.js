(function () {

    angular.module('myApp.home')
    .controller('HomeCtrl',  HomeController);

    HomeController.$inject = ['numberGeneratorService'];

    function HomeController(numberGeneratorService) {

        vm = this;



    };

})();