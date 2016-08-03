'use strict';

// Declare app level module which depends on views, and components
angular.module('pitajMeApp', ['ngResource', 'ui.router', 'ngAnimate', 'ngEmoticons', 'djds4rce.angular-socialshare', 'LocalStorageModule', 'angular-redactor'])
    .constant('pmURL', 'http://api.pitajme.local')
    .run(['$rootScope', 'localStorageService', '$stateParams', function ($rootScope, localStorageService, $stateParams) {
      var invocationCounter = 1;
      $rootScope.operationProgress = {};
      Function.prototype.operationProgress = function (operationName) {
        var fn = this,
            updateStatus = function (invocation, isInProgress) {
              if (isInProgress) {
                $rootScope.operationProgress[operationName] = invocation;
              } else if ($rootScope.operationProgress[operationName] === invocation) {
                delete $rootScope.operationProgress[operationName];
              }
            };
        return function () {
          var result = fn.apply(undefined, arguments),
              invocation = invocationCounter++;
          updateStatus(invocation, true);
          result.finally(updateStatus.bind(undefined, invocation, false));
          return result;
        };
      };

      $rootScope.isAuth = function () {
        if (this.getCurrentUser()) {
          return true;
        }
        return false;
      };
      $rootScope.getCurrentUser = function () {
        return localStorageService.get('currentUser');
      };

    }])
    .directive('pmLoader', ['$rootScope', function ($rootScope) {
      return {
        scope: {
          pmLoader: '@'
        },
        link: function (scope, element) {
          var updateLoader = function (isShown) {
            element.css('display', isShown ? 'block' : 'none');
          };
          updateLoader($rootScope.operationProgress[scope.pmLoader]);
          $rootScope.$watch('operationProgress.' + scope.pmLoader, updateLoader);
        }
      };
    }])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
      localStorageServiceProvider
          .setPrefix('pitajMeApp')
    }])
    .config(function (redactorOptions) {
      redactorOptions.buttons = ['formatting', '|', 'bold', 'italic' , 'link' , 'image', 'file', 'lists'];
      redactorOptions.lang = 'sr-lat';
      redactorOptions.plugins = ['imagemanager'];
      redactorOptions.imageUpload = 'http://api.pitajme.local/redactor/upload/image';
      redactorOptions.uploadUrl = 'http://api.pitajme.local/uploads'
    })
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider) {
  // $locationProvider.hashPrefix('#');

   $urlRouterProvider.otherwise('/');
  $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/header/header.html',
            // controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'views/footer/footer.html',
            // controller: 'FooterCtrl'
          }
        }
      })
      .state('app.home',{
        url: '/',
        views:{
          'container@': {
            templateUrl:'views/home/home.html',
             controller: 'HomeCtrl',
            // controllerAs: 'home'
          },
          'sidebar@app.home':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      .state('app.articles',{
        url: '/articles',
        views:{
          'container@': {
            templateUrl:'views/articles/articles.html',
            controller: 'ArticlesCtrl',
            controllerAs: 'ctrl'
          },
          'sidebar@app.articles':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      .state('app.askQuestion',{
        url: '/askQuestion',
        views:{
          'container@': {
            templateUrl:'views/askQuestion/askQuestion.html',
            controller: 'AskQuestionCtrl',
            controllerAs: 'ctrl'
          },
          'sidebar@app.askQuestion':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      .state('app.forgotPassword',{
        url: '/forgotPassword',
        views:{
          'container@': {
            templateUrl:'views/forgotPassword/forgotPassword.html',
            controller: 'ForgotPasswordCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.contact',{
        url: '/contact',
        views:{
          'container@': {
            templateUrl:'views/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.login',{
        url: '/login',
        views:{
          'container@': {
            templateUrl:'views/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.logout',{
        url: '/logout',
        views:{
          'container@': {
            templateUrl:'views/login/login.html',
            controller: ['AuthService', function (AuthService) {
              AuthService.logout();

            }]
          }
        }
      })
      .state('app.register',{
        url: '/register',
        views:{
          'container@': {
            templateUrl:'views/register/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.user',{
        url: '/user/:id',
        views:{
          'container@': {
            templateUrl:'views/user/user.html',
            controller: 'UserPageCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.user.edit',{
        url: '/edit',
        views:{
          'container@': {
            templateUrl:'views/user/profile.html',
            controller: 'UserPageCtrl',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('app.category',{
        url: '/category/:id',
        views:{
          'container@': {
            templateUrl:'views/category/category.html',
            controller: 'CategoryPageCtrl',
            controllerAs: 'ctrl'
          },
          'sidebar@app.category':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      .state('app.question',{
        url: '/question/:id',
        views:{
          'container@': {
            templateUrl:'views/post/question.html',
            controller: 'QuestionPageCtrl',
            controllerAs: 'ctrl'
          },
          'sidebar@app.question':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      .state('app.article',{
        url: '/article/:id',
        views:{
          'container@': {
            templateUrl:'views/post/question.html',
            controller: 'ArticlePageCtrl',
            controllerAs: 'ctrl'
          },
          'sidebar@app.article':{
            templateUrl: 'views/sidebar.html',
            controller: 'SidebarCtrl'
          }
        }
      })
      // .state('app.strana',{
      //   url: '/strana',
      //   views:{
      //     'container@': {
      //       templateUrl:'views/strana/strana.html'
      //     }
      //   }
      // });
}]);
