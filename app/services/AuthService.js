angular.module('pitajMeApp')
    .factory('AuthService',['$rootScope', '$state', 'localStorageService', function($rootScope, $state, localStorageService){
      var currentUser = {};
      login = function (username, password, rememberMe) {
        if (username && password) {
          if (username === 'urkes' && password === 'sifra') {
            // TODO: postaviti AGE, image
            currentUser.id = 2;
            currentUser.token = 'nekiToken';
            currentUser.username = username;
            currentUser.password = password;
            localStorageService.set('currentUser', currentUser);
            $rootScope.isLoggedIn = true;
            $state.go('app.home', {}, {reload: true});
          } else {
            $rootScope.loginError = 'Korisničko ime ili šifra nisu ispravni!';
            $rootScope.isLoggedIn = false;
          }
        } else {
          $rootScope.loginError = 'Niste uneli potrebne podatke!';
          $rootScope.isLoggedIn = false;
        }
      };
      logout = function() {
        currentUser = localStorageService.get('currentUser');
        if (currentUser) {
          localStorageService.remove('currentUser')
        }
        $state.go('app.home', {}, {reload: true});
      };
      // getCurrentUser = function () {
      //   return localStorageService.get('currentUser');
      // };
    //
    // function login(username, password, rememberMe) {
    //   return Account
    //     .login({rememberMe: rememberMe}, {username: username, password: password})
    //     .$promise
    //     .then(function(response) {
    //       var currentUser = {
    //         id: response.user.id,
    //         tokenId: response.id,
    //         username: username
    //       };
    //       localStorage.setItem('currentUser', JSON.stringify(currentUser));
    //         $state.go('root.home', {}, {reload: true});
    //       /*var next = $location.nextAfterLogin || '/';
    //       $location.nextAfterLogin = null;
    //       $location.path(next);*/
    //     }, function(error){
    //       $rootScope.errorMessage = error.data.error.message;
    //     });
    // }
    // function logout() {
    //   return Account
    //     .logout()
    //     .$promise
    //     .then(function() {
    //       localStorage.clear();
    //       $state.go('root.login');
    //     });
    // }
    // function register(email, password) {
    //   return Account
    //     .create({
    //       email: email,
    //       password: password
    //     })
    //     .$promise;
    // }
    return {
      login: login,
      logout: logout,
      // getCurrentUser: getCurrentUser,
      // register: register
    };

  }]);
