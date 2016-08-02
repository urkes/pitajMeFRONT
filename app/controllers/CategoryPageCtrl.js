angular.module('pitajMeApp')
  .controller('CategoryPageCtrl', [ '$rootScope', '$scope', '$stateParams', 'CategoryService', function ($rootScope, $scope, $stateParams, CategoryService) {
    var getCategoryInfo,
        categoryId = null;

    console.log($stateParams.id);

    getCategoryInfo = function () {
      categoryId = $stateParams.id;
      return CategoryService.getCategoryInfo(categoryId)
          .then(function (result) {
            if (!result.error){
              $scope.category = result;
            }else{
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getCategoryInfo');

    getCategoryPosts = function () {
      categoryId = $stateParams.id;
      return CategoryService.getCategoryPosts(categoryId)
          .then(function (result) {
            if (!result.error){
              $scope.questions = result;
            }else{
              $scope.fetchError = result.error;
            }
          })
    }.operationProgress('getCategoryPosts');

    getCategoryInfo();
    getCategoryPosts();
  }]);