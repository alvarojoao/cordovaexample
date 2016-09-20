(function () {

    angular.module('myApp.dashboard')
    .controller('DashboardCtrl',  DashboardController);

    DashboardController.$inject = ['numberGeneratorService'];

    function DashboardController(numberGeneratorService) {

        vm = this;

        //API
        vm.lastNumber = 0;
        vm.currentNumber = 0;

        vm.updateNumber = updateNumber;

        return vm;
        
        // Implementation Details

        function updateNumber () {
            vm.lastNumber = vm.currentNumber;
            vm.currentNumber = numberGeneratorService.generateNumber();
        }


    };

})();