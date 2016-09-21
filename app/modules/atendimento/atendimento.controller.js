(function () {

    angular.module('myApp.atendimento')
    .controller('AtendimentoCtrl',  AtendimentoController);

    AtendimentoController.$inject = ['numberGeneratorService'];

    function AtendimentoController(numberGeneratorService) {

        vm = this;

        //API


    };

})();