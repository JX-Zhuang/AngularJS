/**
 * Created by jxzhuang on 2017/6/8.
 */
var app = angular.module('myApp', []);
app.service('reverse', function () {
    return function (s) {
        return s.split('').reverse().join('')
    };
});
app.controller('c1', function ($scope,reverse,$location,$http) {
    $scope.firstName = 'zhuang';
    $scope.lastName = 'jx';
    $scope.$watch('firstName', function () {
        $scope.fullName = $scope.firstName + $scope.lastName;
        $scope.fullName = reverse($scope.fullName);
    });
    $scope.$watch('lastName', function () {
        $scope.fullName = $scope.firstName + $scope.lastName;
        $scope.fullName = reverse($scope.fullName);
    });
    console.log($location,$http);
});