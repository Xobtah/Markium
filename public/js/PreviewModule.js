/**
 * Created by xobtah on 23/07/17.
 */

let previewModule = angular.module('preview', []);

previewModule.controller('previewController', ($scope, container, state) => {
    $(document).ready(function () {
        $('#imgPreview').css({
            //float: 'left',
            //position: 'relative',
            overflow: 'hidden',
            width: '100px',
            height: '100px'
        });
    });
    container.layoutManager.eventHub.on('selectChange', (select) => {
        let scaleX = 100 / (select.width || 1);
        let scaleY = 100 / (select.height || 1);
        $('#imgPreview').css({
            width: Math.round(scaleX * 400) + 'px',
            height: Math.round(scaleY * 300) + 'px',
            marginLeft: '-' + Math.round(scaleX * select.x1) + 'px',
            marginTop: '-' + Math.round(scaleY * select.y1) + 'px'
        });
    });
});