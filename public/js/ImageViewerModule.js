/**
 * Created by xobtah on 23/07/17.
 */

let imageViewerModule = angular.module('imageViewer', []);

imageViewerModule.controller('imageViewerController', ($scope, container, state) => {
    $(document).ready(() => {
        $('img#pic').imgAreaSelect({
            handles: true,
            onSelectChange: (img, select) => {
                container.layoutManager.eventHub.emit('selectChange', select);
            }
        });
    });
    container.layoutManager.eventHub.on('configChange', (config) => {
        /*$(document).ready(() => {
            $('img#pic').imgAreaSelect({
                handles: true,
                onSelectChange: (img, select) => {
                    container.layoutManager.eventHub.emit('selectChange', select);
                },
                x1: config.x1, y1: config.y1, x2: config.x2, y2: config.y2
            });
        });*/
    });
});