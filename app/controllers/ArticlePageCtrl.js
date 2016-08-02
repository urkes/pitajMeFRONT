angular.module('pitajMeApp')
  .controller('ArticlePageCtrl', [ '$rootScope', '$scope', '$stateParams', 'PostsService', function ($rootScope, $scope, $stateParams, PostsService) {
    var getArticleDetails;
    //     categoryId = null;
    //
    console.log($stateParams.id);
    //
    getArticleDetails = function () {
      questionId = $stateParams.id;
      return PostsService.getQuestionDetails(questionId)
          .then(function (result) {
            if (!result.error){
              $scope.question = result;
            }else{
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getArticleDetails');

    getArticleDetails();
  }]);