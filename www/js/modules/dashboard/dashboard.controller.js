(function () {

    angular.module('myApp.dashboard')
    .controller('DashboardCtrl',  DashboardController);

    DashboardController.$inject = ['numberGeneratorService','$ionicNavBarDelegate','$rootScope'];

    function DashboardController(numberGeneratorService,$ionicNavBarDelegate,$rootScope) {

        vm = this;
        $rootScope.$on('$stateChangeSuccess', 
          function(event, toState, toParams, fromState, fromParams){
            if (toState.name==='dashboard')
                {
                    $ionicNavBarDelegate.showBackButton(false);
                    //Your function code or function call goes here 
                }
          }
        );
        //API
     vm.init = function(){
        $ionicNavBarDelegate.showBackButton(false);

     };
     vm.redirect = function(){
        window.open('http://poc.looqbox.com/nta/', '_system', 'location=yes');
    };
    vm.init();

    };

})();