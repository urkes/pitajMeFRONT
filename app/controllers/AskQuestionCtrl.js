angular.module('pitajMeApp')
    .controller('AskQuestionCtrl', [ '$rootScope', '$scope', 'PostsService', 'CategoryService', function ($rootScope, $scope, PostsService, CategoryService) {
      var getCategories,
          sendQuestion,
          question;

      getCategories = function () {
        return CategoryService.getAllCategories()
            .then(function (result) {
              if (!result.error){
                $scope.categories = result;
              }else{
                $scope.fetchError = result.error;
              }
            });
      };

      $scope.sendQuestion = function (question) {
        $scope.message = null;
        //TODO: ovde moram odraditi validaciju forme i onda slanje na Servis da se postavi pitanje.
        // Nakon postavljanja pitanja treba redirektovati na odgovarajuci state

        // this.question = question;
        // console.log(this.question);
        if (!question.category) {
          $scope.message = "Morate odabrati kategoriju";
        }
      };
      getCategories();
    }]);