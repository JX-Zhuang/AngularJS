/**
 * Created by jxzhuang on 2017/6/8.
 */
var app = angular.module('myApp',[]);
app.controller('c1',function ($scope) {
    $scope.sites = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Runoob", url : "http://www.runoob.com"},
        {site : "Taobao", url : "http://www.taobao.com"}
    ];
    $scope.s1 = $scope.sites[0].url;
    $scope.s2 = $scope.sites[1];
});