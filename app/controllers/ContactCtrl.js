angular.module('pitajMeApp')
    .controller('ContactCtrl', [ '$rootScope', '$scope', '$http', 'pmURL', '$timeout', function ($rootScope, $scope, $http, pmURL, $timeout) {
        $scope.contactMail = {};

        $scope.sendContactMail = function (contactMail) {
            return $http.post(pmURL + '/contact/send', contactMail, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                }
            }).then(
                function (result) {
                  $scope.message = result.data.message;
                  $scope.contactMail = {};
                  $timeout(function () {
                    $scope.message = null;
                  }, 3000);
                    return result;
                    // console.log(result);
                },
                function (reason) {
                  $scope.errorMessage = reason.data.message;
                    return reason;
                }
            )
        };
    }]);