angular.module('pitajMeApp')
    .controller('HomeCtrl', [ '$rootScope', '$scope', 'PostsService', function ($rootScope, $scope, PostsService) {
      var getAllQuestions,
          getAllArticles,
          pageLength = 3,
          pageNumber = 0,
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
                newQuestions = $.map(result.data, function (value, index) {
                  return [value];
                });
                // result.data.forEach(function (question) {
                //   $scope.questions.push(question);
                // });
                // if (result.length < pageLength+1){
                //   pageNumber =
                // } else {
                //   $scope.questions = result.slice(0,pageLength);
                // }
                $scope.questions = newQuestions;
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('getPosts');

      $scope.loadNextQuestions = function () {
        return PostsService.getPosts(pageLength, nextPage)
            .then(function (result) {
              var newPosts = {};
              if (!result.error){
                if (!result.nextPage) {
                  $scope.hasMoreQuestions = false;
                } else {
                  nextPage = result.nextPage;
                }
                newQuestions = $.map(result.data, function (value, index) {
                  return [value];
                });
                // newPosts.forEach(function (question) {
                //   $scope.questions.push(question);
                // });
                $scope.questions = $scope.questions.concat(newQuestions);
                console.log($scope.questions);
                  // $scope.questions.concat(result.data);
              }else{
                $scope.fetchError = result.error;
              }
            });
      }.operationProgress('loadNextQuestions');

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