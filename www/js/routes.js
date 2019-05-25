angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mOBILEAPPSTRAINING', {
    url: '/page1',
    templateUrl: 'templates/mOBILEAPPSTRAINING.html',
    controller: 'mOBILEAPPSTRAININGCtrl'
  })

  .state('aNDROIDOS', {
    url: '/page2',
    templateUrl: 'templates/aNDROIDOS.html',
    controller: 'aNDROIDOSCtrl'
  })

  .state('iOS', {
    url: '/page3',
    templateUrl: 'templates/iOS.html',
    controller: 'iOSCtrl'
  })

  .state('contactUs', {
    url: '/page5',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});