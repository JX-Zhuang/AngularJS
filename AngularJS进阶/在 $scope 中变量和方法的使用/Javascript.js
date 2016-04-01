angular.module('app',[])
.controller('MyCtrl',function($scope){
	$scope.msg='';
	$scope.errormsg='';
	$scope.user={uname:'',pwd:''};
	$scope.reverse=function(){
		return $scope.msg.split('').reverse().join('');
	}
	$scope.login=function(){
		if ($scope.user.uname=='admin'&&$scope.user.pwd=='admin') {
			alert('ok!');
		}else{
			$scope.errormsg='error';
		}
		console.log($scope.user);
	}
});