angular.module('pitajMeApp')
  .controller('ArticlePageCtrl', [ '$rootScope', '$scope', '$stateParams', 'PostsService', function ($rootScope, $scope, $stateParams, PostsService) {
    // var getCategoryInfo,
    //     categoryId = null;
    //
    console.log($stateParams.id);
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