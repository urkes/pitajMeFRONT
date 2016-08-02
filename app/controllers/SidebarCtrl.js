angular.module('pitajMeApp')
    .controller('SidebarCtrl', [ '$rootScope', '$scope', 'CategoryService', 'PostsService', function ($rootScope, $scope, CategoryService, PostsService) {
      var getAllCategories;
      $scope.categories = [];
      $scope.mostLiked = [];

      getAllCategories = function () {
        return CategoryService.getAllCategories()
            .then(function (result) {
              $scope.categories = result;
            });
      }
      getMostLiked = function () {
        return PostsService.getMostLiked()
            .then(function (result) {
              $scope.mostLiked = result;
            });
      }
      getMostLiked();
      getAllCategories();
    }]);