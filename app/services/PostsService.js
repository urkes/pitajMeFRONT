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

  this.getPosts = function (pageLength, page) {
    return $http.get(pmURL + '/posts/summary?per-page=' + pageLength + '&page=' + page)
        .then(
            function (result) {
              var currentPage = result.headers()['x-pagination-current-page'];
              var maxPages = result.headers()['x-pagination-page-count'];
              if ((parseInt(currentPage) + 1) != parseInt(maxPages)) {
                result.nextPage = 1 + parseInt(currentPage);
              }

              return result;
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


  this.getUserQuestions = function (userId) {
    return $http.get(pmURL + '/users/' + userId + '/question')
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
  this.getUserAnswers = function (userId) {
    return $http.get(pmURL + '/users/' + userId + '/answer')
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
  this.getUserComments = function (userId) {
    return $http.get(pmURL + '/users/' + userId + '/comment')
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


  this.sendQuestion = function (question) {
    return $http.post(pmURL + '/posts', question, {
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
              reason.error = "Neuspešna konekcija ka serveru. Molimo Vas pokušajte ponovo!";
              return reason;
            }
        )
  };
}]);
