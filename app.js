/**
 * Created by anishma on 1/31/2017.
 */
(function () {
    var app=angular.module("Githubviewer",["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main",{
                templateUrl:"main.html",
                controller:"MainCtrl"
            })
            .when("/user/:username",{
                templateUrl:"user.html",
                controller:"UserCtrl"
            })
            .when("/repo/:username/:reponame",{
                templateUrl:"repo.html",
                controller:"RepoCtrl"
            })
            .otherwise({redirectTo:"/main"});
    });
}());