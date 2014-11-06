/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */


angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'bn22';
        $scope.getRepos = function () {

            //add code here
            $scope.loading = true;
            $http.get('https://api.github.com/users/' + $scope.userName + '/repos')
                .success(function (data) {
                    $scope.repos = data;
                    $scope.errorMessage = null;
                })
                .error(function(err) {
                    //alert(err.message)
                    $scope.errorMessage = err.message;
                })
                .finally(function() {
                    $scope.loading = false;
                });

    };
});




//http://www.ajaxload.info/
//https://parse.com