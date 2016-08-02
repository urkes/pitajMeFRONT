angular.module('pitajMeApp')
    .controller('ArticlesCtrl', [ '$rootScope', '$scope', 'PostsService', function ($rootScope, $scope, PostsService) {
      var getAllArticles;
      $scope.articles = [];

      getAllArticles = function () {
        return PostsService.getAllArticles()
            .then(function (result) {
              if (!result.error){
                $scope.articles = result;
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('getAllArticles');
      getAllArticles();
    }]);