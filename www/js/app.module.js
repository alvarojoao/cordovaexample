(function () {
    angular.module('myApp', [
    	'ionic',
        'ui.router',
        'myApp.home',
        'myApp.dashboard'
    ]).run(function($ionicPlatform) {
		  $ionicPlatform.ready(function() {
		    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		    // for form inputs)
		    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		      cordova.plugins.Keyboard.disableScroll(true);

		    }
		    if (window.StatusBar) {
		      // org.apache.cordova.statusbar required
		      StatusBar.styleDefault();
		    }
		  });
		})
    
})();

