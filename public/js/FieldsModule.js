/**
 * Created by xobtah on 03/08/17.
 */

let fieldsModule = angular.module('fields', []);

fieldsModule.controller('fieldsController', ($scope, container, state) => {
    $scope.currentNode = null;
    container.layoutManager.eventHub.on('node', (node) => {
        $scope.currentNode = node;
        $scope.$apply();
    });
});