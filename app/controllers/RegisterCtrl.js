angular.module('pitajMeApp')
  .controller('RegisterCtrl', [ '$rootScope', '$scope', '$state', 'countryService', 'dateService', 'UsersService', '$stateParams', function ($rootScope, $scope, $state, countryService, dateService, UsersService, $stateParams) {
    var validateEmail;
    $scope.countries = countryService.get();
    $scope.days = dateService.getDay();
    $scope.months = dateService.getMonth();
    $scope.years = dateService.getYear();
    $scope.sex = dateService.getSex();

    $scope.registerUser = function (user) {
      return UsersService.registerUser(user)
          .then(
              function (result) {
                if (!result.error){
                  $scope.user = result;
                  $state.go('app.register.success', {}, {reload: true});
                }else{
                  $scope.message = result.error;
                }
              }
          )
    };

    validateEmail = function () {
      var validationToken = $stateParams.validationToken
          email = $stateParams.email;
      console.log(validationToken);

      return UsersService.validateEmail(email, validationToken)
          .then(
              function (result) {
                if (!result.error){
                  $scope.message = 'Email uspešno validiran';
                }else{
                  $scope.message = 'Email validacija nije uspela! Molimo Vas pokušajte ponovo.';
                }
              }
          )
    }.operationProgress('validatingEmail');

    if ($state.current.name === 'app.user.validateEmail') {
      validateEmail();
    }

  }]);