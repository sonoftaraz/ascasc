//Create a modul
var blogApp = angular.module('blogApp', ['ngRoute', 'ngAnimate']);

//Routing
blogApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'views/front-page.html'
		})
		.when('/blog', {
			templateUrl:'views/posts.html',
			controller: 'PostsController'
		})
		.when('/about', {
			templateUrl:'views/about.html',
		})
		.when('/contact', {
			templateUrl:'views/contact.html',
		})
		.otherwise({
			redirectTo: '/'	
		});
}]);

//Controller
blogApp.controller('PostsController', ['$scope', '$http' ,function($scope, $http){
		
	$http.get('http://localhost/asu/data/posts.json').success(function(data){
	  $scope.posts = data;
	});﻿

}]);