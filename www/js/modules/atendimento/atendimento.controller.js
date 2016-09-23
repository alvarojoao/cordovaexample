(function () {

    angular.module('myApp.atendimento')
    .controller('AtendimentoCtrl',  AtendimentoController);

    AtendimentoController.$inject = ['atendimentoWatson'];

    function AtendimentoController(atendimentoWatson) {

        var vm = this;
        vm.messageField = '';
        vm.responseField = 'Olá, como posso ajudar?';
        //API

        vm.sendMessage = function(){
        	atendimentoWatson.sendMessage(vm.messageField).then(function(res,req){
        		console.log(res);
        		vm.responseField=res.data;
        	},function(error){
        		console.log(error);
        	});
        	vm.messageField = '';
        };


    };

})();