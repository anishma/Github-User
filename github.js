/**
 * Created by anishma on 3/2/2017.
 */
(function(){
    var github=function ($http) {
        var getUser=function(username)
        {
            return $http.get("https://api.github.com/users/"+username)
                        .then(function (response) {
                            return response.data;
                        });
        };
        var getRepos=function (user) {
            return $http.get(user.repos_url)
                        .then(function (response) {
                            return response.data;
                        });
        };
        var getRepoDetails=function (user,reponame) {
            return $http.get("https://api.github.com/repos/"+user+"/"+reponame)
                        .then(function (response) {
                            return response.data;
                        });
        };
        var getContributors=function (repodetails) {
            return $http.get(repodetails.contributors_url)
                        .then(function (response) {
                            return response.data;
                        });
        };
        return{
            getUser:getUser,
            getRepos:getRepos,
            getRepoDetails:getRepoDetails,
            getContributors:getContributors
        };
    };
    var module=angular.module("Githubviewer");
    module.factory("github",github);
}());