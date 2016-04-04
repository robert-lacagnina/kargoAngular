'use strict';

angular.module('kargoApp').component('postTable', {
    templateUrl: 'views/postTable.html',
    controller: function ($scope, $http) {
        $http.get('http://jsonplaceholder.typicode.com/posts').success(function (data){
            $scope.posts = data;
        });
    }
});