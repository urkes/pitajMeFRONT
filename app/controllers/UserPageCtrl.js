angular.module('pitajMeApp')
  .controller('UserPageCtrl', [ '$rootScope', '$scope', '$stateParams', 'PostsService', 'AuthService', 'UsersService', function ($rootScope, $scope, $stateParams, PostsService, AuthService, UsersService) {
    var getUserQuestions,
        getUserAnswers,
        getUserComments,
        getUserInfo,
        registerUser,
        userId = null;


    $scope.isMe = function () {
      console.log("Korisnik " + $stateParams.id);
      currentId = $rootScope.getCurrentUser().id;
      return $stateParams.id == currentId;
    };

    getUserQuestions = function () {
      userId = $stateParams.id;
      return PostsService.getUserQuestions(userId)
          .then(function (result) {
            if (!result.error) {
              $scope.questions = result;
            } else {
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getUserQuestions');
    getUserAnswers = function () {
      userId = $stateParams.id;
      return PostsService.getUserAnswers(userId)
          .then(function (result) {
            if (!result.error) {
              $scope.answers = result;
            } else {
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getUserAnswers');
    getUserComments = function () {
      userId = $stateParams.id;
      return PostsService.getUserComments(userId)
          .then(function (result) {
            if (!result.error) {
              $scope.comments = result;
            } else {
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getUserComments');

    getUserInfo = function () {
      userId = $stateParams.id;
      return UsersService.getUserInfo(userId)
          .then(function (result) {
            if (!result.error) {
              $scope.user = result;
            } else {
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getUserComments');

    getUserQuestions();
    getUserAnswers();
    getUserComments();
    getUserInfo();
    //
    // getCategoryInfo = function () {
    //   categoryId = $stateParams.id;
    //   return CategoryService.getCategoryInfo(categoryId)
    //       .then(function (result) {
    //         if (!result.error){
    //           $scope.category = result;
    //         }else{
    //           $scope.fetchError = result.error;
    //         }
    //       })
    // }.operationProgress('getCategoryInfo');
    //
    // getCategoryInfo();
  }]);