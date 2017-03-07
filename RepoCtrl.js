/**
 * Created by anishma on 2/2/2017.
 */
(function () {
    var app=angular.module("Githubviewer");
    var repoctrl=function ($scope,github,$routeParams) {
        var onrepo=function (data) {
            $scope.repodetails=data;
            $scope.name=($scope.repodetails.name);
            $scope.desc=$scope.repodetails.description;
            github.getContributors($scope.repodetails)
                .then(function (data) {
                    $scope.contributors=data;
                });
        };
        $scope.reponame=$routeParams.reponame;
        $scope.username=$routeParams.username;
        github.getRepoDetails($scope.username,$scope.reponame)
            .then(onrepo);
    };

    app.controller("RepoCtrl",repoctrl);
}());