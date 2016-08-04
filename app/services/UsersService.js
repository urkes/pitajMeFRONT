angular.module('pitajMeApp')
.service('UsersService', ['$http', '$state', '$rootScope', 'pmURL', function ($http, $state, $rootScope, pmURL) {
  // var self = this;

  this.getUserInfo = function (userId) {
    return $http.get(pmURL + '/users/' + userId)
        .then(
            function (result) {
              return result.data;
              // console.log(result);
            },
            function (reason) {
              console.log('Greska: ' + reason);
              reason.error = "Neuspešna konekcija ka serveru. Molimo Vas pokušajte ponovo!";
              return reason;
            }
        )
  };

  this.registerUser = function (user) {
    return $http.post(pmURL + '/user/register', user, {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    }).then(
        function (result) {

          return result.data;
          // console.log(result);
        },
        function (reason) {
          console.log('Greska: ' + reason);
          return reason;
        }
    )
  };

  this.validateEmail = function (email, validationToken) {
    return $http.get(pmURL + '/user/validate?email=' + email + '&validation_key=' + validationToken)
        .then(
            function (result) {
              return result.data;
              // console.log(result);
            },
            function (reason) {
              console.log('Greska: ' + reason);
              reason.error = "Neuspešna konekcija ka serveru. Molimo Vas pokušajte ponovo!";
              return reason;
            }
        )
  };

}]);
