angular.module('pitajMeApp')
    .controller('HomeCtrl', [ '$rootScope', '$scope', 'PostsService', function ($rootScope, $scope, PostsService) {
      var getAllQuestions,
          getAllArticles,
          pageLength = 3,
          pageNumber = 1,
          nextPage = null,
          offset = 0;

      $scope.questions = [];
      $scope.articles = [];
      $scope.hasMoreQuestions = true;

      getAllQuestions = function () {
        return PostsService.getPosts(pageLength, pageNumber)
            .then(function (result) {
              if (!result.error){
                if (!result.nextPage) {
                  $scope.hasMoreQuestions = false;
                } else {
                  nextPage = result.nextPage;
                }
                $scope.questions = result.data;
                // if (result.length < pageLength+1){
                //   pageNumber =
                // } else {
                //   $scope.questions = result.slice(0,pageLength);
                // }
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('getPosts');

      $scope.loadNextQuestions = function () {
        return PostsService.getPosts(pageLength, nextPage)
            .then(function (result) {
              if (!result.error){
                if (!result.nextPage) {
                  $scope.hasMoreQuestions = false;
                } else {
                  nextPage = result.nextPage;
                }
                $scope.questions = $scope.questions.concat(result.data);
                  // $scope.questions.concat(result.data);
              }else{
                $scope.fetchError = result.error;
              }
            });
      };

      getAllArticles = function () {
        return PostsService.getAllArticles()
            .then(function (result) {
              if (!result.error){
                $scope.articles = result;
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('getPosts');
      getAllQuestions();
      getAllArticles();
    }]);