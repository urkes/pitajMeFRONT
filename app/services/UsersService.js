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

}]);
