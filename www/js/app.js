angular.module('trippy_app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/menu.html'
  })

  .state('app.trippy', {
    url:'/trippy',
    views: {
      'menuContent': {
        templateUrl:'states/trippy.html'
      }
    }
  })
  .state('app.trippy', {
    url: 'trippy/:trippyId',
    views: {
      'menuContent': {
        templateUrl:'states/trippy.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/trippy');

});
