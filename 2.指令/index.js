/**
 * Created by jxzhuang on 2017/6/7.
 */
var app = angular.module('myApp',[]);
app.directive('myDirective',function () {
    return {
        /**
         * restrict:默认EA
         * E:元素
         * A:属性
         * C:类名
         * M:注释
         */
        restrict:'CA',
        template:'<h1>你好 Angular</h1>'
    }
});