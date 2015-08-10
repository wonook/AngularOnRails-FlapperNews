angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.test = 'Hello angular world!';
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') { $scope.title="No Title"; }
      posts.create({
          title: $scope.title,
          link: $scope.link,
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
        posts.upvote(post);
    };
  }
])


