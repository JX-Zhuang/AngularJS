/**
 * Created by jxzhuang on 2017/6/7.
 */
var app = angular.module('myApp', []);
app.controller('c',function ($scope) {
    $scope.pipe = [{
        name: '格式化数字为货币格式 currency：',
        value: 123,
        fun: 'currency'
    },{
        name: '格式化字符串为小写 lowercase：',
        value: 'ASDF',
        fun: 'lowercase'
    }
    ];
});
/**
 * 自定义过滤器
 */
app.filter('myFilter', function ($filter) {
    /**
     * 依赖注入
     */
    return function (v,fun) {
        return $filter(fun)(v);
    };
});