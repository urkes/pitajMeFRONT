angular.module('pitajMeApp')
    .controller('AskQuestionCtrl', [ '$rootScope', '$scope', 'PostsService', 'CategoryService', '$state', 'UsersService', '$sanitize', function ($rootScope, $scope, PostsService, CategoryService, $state, UsersService, $sanitize) {
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

      $scope.sendQuestion = function (question, content) {
        var user;
        $scope.message = null;
        question.text = $sanitize(content);
        question.type = 'question';
        //TODO: ovde moram odraditi validaciju forme i onda slanje na Servis da se postavi pitanje.
        // Nakon postavljanja pitanja treba redirektovati na odgovarajuci state
        if (!$rootScope.isAuth()) {
          $rootScope.message = "Morate biti ulogovani da biste postavili pitanje!";
          $state.go('app.login', {}, {reload: true});
        }
        if (!question.category) {
          $scope.message = "Morate odabrati kategoriju";
          return;
        }
        return UsersService.getUserInfo($rootScope.getCurrentUser().id).then(
            function (result) {
              user = result;
              question.user = user;
              return PostsService.sendQuestion(question)
                  .then(function (result) {
                    if (result.id) {
                      // $rootScope.message = 'Čestitamo! Uspešno ste postavili pitanje.';
                      $state.go('app.question', {id: result.id}, {reload: true});
                    } else {
                      $rootScope.message = 'Neuspešno! Molimo Vas pokušajte ponovo.';
                    }
                    //$scope.question = null;
                  })
            }
        );
      };
      getCategories();
    }]);