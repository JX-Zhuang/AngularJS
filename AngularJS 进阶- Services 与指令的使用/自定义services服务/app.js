angular.module('app',[])
.value('Name','zhuang')
.value('Name','zjx')//可以改变
.constant('Http','www.baidu.com')
.constant('http','www.xxx.com')//不能改变
.factory('Date',function(){
	return {
		msg:'hello angular',
		setMsg:function(){
			this.msg='hello world';
			return 123;
		}
	}
})
.service('username',function(){
	this.firstname='zhuang';
	this.lastname='jx';
	this.getName=function(){
		return this.firstname+this.lastname;
	} 
})
.controller('MyCtrl',function($scope,Name,Http,http,Date,username){
	$scope.name=Name;
	$scope.http=http;
	$scope.Http=Http;
	$scope.date=Date;
	Date.setMsg();
	$scope.uname=username.getName();
});