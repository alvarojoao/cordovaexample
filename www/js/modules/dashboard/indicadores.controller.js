(function () {

    angular.module('myApp.dashboard')
    .controller('IndicatorsCtrl',  IndicatorsController);

    IndicatorsController.$inject = ['numberGeneratorService','$ionicNavBarDelegate','$rootScope'];

    function IndicatorsController(numberGeneratorService,$ionicNavBarDelegate,$rootScope) {

        vm = this;

        //API
     $rootScope.$on('$stateChangeSuccess', 
          function(event, toState, toParams, fromState, fromParams){
            if (toState.name==='indicadores-business' || toState.name==='indicadores-maps' 
            	|| toState.name==='indicadores-technology')
                {
    			 $ionicNavBarDelegate.showBackButton(true);
                    //Your function code or function call goes here 
                }
          }
        );
    };

})();