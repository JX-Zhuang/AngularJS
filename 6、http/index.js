/**
 * Created by jxzhuang on 2017/6/8.
 */
var url = 'http://www.runoob.com/try/angularjs/data/sites.php';
var app = angular.module('myApp',[]);
app.controller('c1',function ($scope,$http) {
   $http({
       method:'get',
       url:url
   }).success(function (data) {
      $scope.data = data.sites;
   }).error(function (e) {
       console.log(e);
   });
});