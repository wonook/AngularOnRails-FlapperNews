angular.module('flapperNews', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }
])

.factory('posts', [function() {
    var o = {
        posts: []
    };
    return o;
}])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.test = 'Hello angular world!';
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') { $scope.title="No Title"; }
      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,
        upvotes: 0,
        comments: [
            {author: 'Joe', body: 'Hello world!', upvotes: 1},
            {author: 'Bob', body: 'lol this is funny', upvotes:2}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes ++;
    };
  }
])

.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){
        $scope.post = posts.posts[$stateParams.id];
    }
]);

