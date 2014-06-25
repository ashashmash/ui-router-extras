(function() {
  "use strict";
  var app = angular.module("futureStates", ['ct.ui.router.extras', 'ct.ui.router.extras.statevis', 'mgcrea.ngStrap.navbar']);
  app.controller("home", function($scope) {
    
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', function($sp, $urp) {
    $urp.otherwise("/home");
    $sp.state("home", {
      url: '/home',
      controller: function() {},
      templateUrl: 'partials/home.html'
    });
    $sp.state("sticky", {
      url: '/sticky',
      controller: function() {},
      templateUrl: 'partials/sticky.html'
    });
    $sp.state("dsr", {
      url: '/dsr',
      controller: function($scope, $document) {
        $scope.scrollTo = function scrollTo(selector) {
          var elm = $document.find(selector);
          if (elm[0]) elm[0].scrollIntoView();
        };
      },
      templateUrl: 'partials/dsr/dsr.html'
    });
    $sp.state("future", {
      url: '/future/:section',
      templateUrl: 'partials/future/future.html',
      controller: function($scope, $document) {
        $scope.scrollTo = function scrollTo(selector) {
          var elm = $document.find(selector);
          if (elm[0]) elm[0].scrollIntoView();
        };
      }
    });
  }]);

  app.run(function ($rootScope, $state) {
    $rootScope.$state = $state;
  });
})();