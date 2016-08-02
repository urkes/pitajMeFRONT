angular.module('pitajMeApp')
  .controller('LoginCtrl', [ '$rootScope', '$scope', 'AuthService', 'localStorageService', function ($rootScope, $scope, AuthService, localStorageService) {

    $scope.login = function () {
      AuthService.login($scope.username, $scope.password, $scope.rememberMe);
    };
    // $scope.logout = function () {
    //   AuthService.logout();
    // };
  }]);