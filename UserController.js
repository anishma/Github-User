/**
 * Created by anishma on 2/2/2017.
 */
(function () {
    var app=angular.module("Githubviewer");

    var userctrl=function ($scope,github,$routeParams) {
        var userFound=function (data) {
            $scope.user=data;
            $scope.company=($scope.user.company);
            $scope.location=($scope.user.location);
            $scope.email=($scope.user.email);
            github.getRepos($scope.user)
                .then(onRepos,onError);
        };
        var onRepos=function (data) {
            $scope.repos=data;

        };
        var onError=function(reason){
            $scope.error="Could not fetch the user";
        };

        $scope.username=$routeParams.username;
        $scope.repoSortOrder="-stargazers_count";

        github.getUser($scope.username)
              .then(userFound,onError);
    };
    app.controller("UserCtrl",userctrl);
}());