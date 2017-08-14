/**
 * Created by xobtah on 23/07/17.
 */

let jsonPreviewModule = angular.module('jsonPreview', []);

jsonPreviewModule.controller('jsonPreviewController', ($scope, container, state) => {
    $(document).ready(() => {
        $('div#jstree').jstree({
            'core': {
                'data': [
                    'JSON File', {
                        'text': 'Root node 2',
                        /*'state': {
                            'opened': true,
                            'selected': true
                        },*/
                        'children' : [
                            { 'text': 'Child 1' },
                            'Child 2'
                        ]
                    }
                ],
                check_callback: true
            },
            plugins: [ 'contextmenu' ]
        });
        $('div#jstree').on('select_node.jstree', (event, data) => {
            container.layoutManager.eventHub.emit('node', data.node);
        });
    });
});