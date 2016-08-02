angular.module('pitajMeApp')
  .controller('UserPageCtrl', [ '$rootScope', '$scope', '$stateParams', 'PostsService', 'AuthService', function ($rootScope, $scope, $stateParams, PostsService, AuthService) {
    // var getCategoryInfo,
    //     categoryId = null;
    //

    $scope.isMe = function () {
      console.log("Korisnik " + $stateParams.id);
      currentId = $rootScope.getCurrentUser().id;
      return $stateParams.id == currentId;
    };

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