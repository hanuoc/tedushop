/// <reference path="../../bower_components/angular/angular.js" />
var myApp = angular.module('myModule', []);

myApp.controller("mycontroller", mycontroller);

mycontroller.$inject = ['$scope'];
//declare
function mycontroller($scope) {
    $scope.message = "this is my message from controller";
}