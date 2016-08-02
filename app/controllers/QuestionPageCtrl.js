angular.module('pitajMeApp')
  .controller('QuestionPageCtrl', [ '$rootScope', '$scope', '$stateParams', 'PostsService', function ($rootScope, $scope, $stateParams, PostsService) {
    var getQuestionDetails;
    //     categoryId = null;
    //
    console.log($stateParams.id);
    //
    getQuestionDetails = function () {
      questionId = $stateParams.id;
      return PostsService.getQuestionDetails(questionId)
          .then(function (result) {
            if (!result.error){
              $scope.question = result;
            }else{
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getQuestionDetails');

    getQuestionDetails();
  }]);