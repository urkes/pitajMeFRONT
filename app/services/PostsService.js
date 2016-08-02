angular.module('pitajMeApp')
.service('PostsService', ['$http', '$state', '$rootScope', 'pmURL', function ($http, $state, $rootScope, pmURL) {
  // var self = this;

  this.getAllPosts = function () {
    return $http.get(pmURL + '/posts/summary')
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

  this.getMostLiked = function () {
    return $http.get(pmURL + '/posts/liked')
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
  this.getAllArticles = function () {
    return $http.get(pmURL + '/posts/type/article')
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

  this.getQuestionDetails = function (questionId) {
    return $http.get(pmURL + '/posts/' + questionId)
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
