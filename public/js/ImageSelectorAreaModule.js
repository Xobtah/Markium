/**
 * Created by xobtah on 23/07/17.
 */

let imageSelectorAreaModule = angular.module('imageSelectorArea', []);

imageSelectorAreaModule.controller('imageSelectorAreaController', ($scope, container, state) => {
    $scope.imgSelectArea = { height: 0, width: 0, x1: 0, y1: 0, x2: 0, y2: 0 };
    container.layoutManager.eventHub.on('selectChange', (select) => {
        $scope.imgSelectArea = select;
        $scope.$apply();
    });
    $scope.$watch('imgSelectArea', () => {
        if ($scope.imgSelectArea.height || $scope.imgSelectArea.width)
            container.layoutManager.eventHub.emit('selectChange', $scope.imgSelectArea);
    }, true);
});