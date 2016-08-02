angular.module('pitajMeApp')
  .service('CategoryService', ['$http', '$state', '$rootScope', 'pmURL', function ($http, $state, $rootScope, pmURL) {
    // var self = this;

    this.getAllCategories = function () {
      return $http.get(pmURL + '/category/list')
          .then(
              function (result) {
                return result.data;
                // console.log(result);
              },
              function (reason) {
                console.log('Greska: ' + reason);
              }
          )
    };
    this.getCategoriesSelect = function () {
      return $http.get(pmURL + '/category')
          .then(
              function (result) {
                return result.data;
                // console.log(result);
              },
              function (reason) {
                console.log('Greska: ' + reason);
              }
          )
    };

    this.getCategoryPosts = function (categoryId) {
      return $http.get(pmURL + '/posts/category/' + categoryId)
          .then(
              function (result) {
                return result.data;
                // console.log(result);
              },
              function (reason) {
                console.log('Greska: ' + reason);
              }
          )
    };

    this.getCategoryInfo = function (categoryId) {
      return $http.get(pmURL + '/categories/' + categoryId)
          .then(
              function (result) {
                return result.data;
              },
              function (reason) {
                console.log('Greska: ' + reason);
              }
          )
    };
  }]);
