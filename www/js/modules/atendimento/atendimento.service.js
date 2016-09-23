(function() {
    angular
    .module('myApp.atendimento')
    .service('atendimentoWatson', AtendimentoWatson);

    AtendimentoWatson.$inject = ['$http'];

    function AtendimentoWatson($http) {
        var vm = this;

        vm.sendMessage =  function sendMessage(message) {
            var params = {message: message};
            return $http.post('https://newaopoc.herokuapp.com/mobile',params);
        };
    }
})();