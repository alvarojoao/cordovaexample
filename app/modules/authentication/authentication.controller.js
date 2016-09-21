(function () {

    angular.module('myApp.authentication')
        .controller('AuthenticationCtrl',  AuthenticationController);

    AuthenticationController.$inject = [];

    function AuthenticationController() {

        vm = this;

    };
})();