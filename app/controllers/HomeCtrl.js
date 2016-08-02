angular.module('pitajMeApp')
    .controller('HomeCtrl', [ '$rootScope', '$scope', 'PostsService', function ($rootScope, $scope, PostsService) {
      var getAllQuestions,
          getAllArticles;
      $scope.questions = [];
      $scope.articles = [];

      getAllQuestions = function () {
        return PostsService.getAllPosts()
            .then(function (result) {
              if (!result.error){
                $scope.questions = result;
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('getPosts');

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