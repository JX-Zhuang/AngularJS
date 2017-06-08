/**
 * Created by jxzhuang on 2017/6/7.
 */
var app = angular.module('myApp',[]);
app.controller('c1',function ($scope) {
   $scope.name = 'zhuang';
   setTimeout(function () {
       console.log($scope.$$childHead===$scope.$$childTail);
   });
});
app.controller('c2',function ($scope) {
   $scope.name = 'jia';
});
app.controller('c11',function ($scope) {
   $scope.name = 'jx';
});
app.controller('c3',function ($scope,$rootScope) {
    // $rootScope: 根作用域
   console.log(arguments);
});