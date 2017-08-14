/**
 * Created by xobtah on 23/07/17.
 */

let config = {
    content: [ {
        type: 'row',
        content: [ {
            type: 'column',
            content: [ {
                type: 'component',
                componentName: 'JSON Preview',
                componentState: { moduleId: 'jsonPreview' }
            }, {
                type: 'component',
                componentName: 'Fields',
                componentState: { moduleId: 'fields' }
            } ]
        }, {
            type: 'column',
            content: [ {
                type: 'component',
                componentName: 'Image Viewer',
                componentState: { moduleId: 'imageViewer' }
            }, {
                type: 'row',
                content: [ {
                    type: 'component',
                    componentName: 'Preview',
                    componentState: { moduleId: 'preview' }
                }, {
                    type: 'component',
                    componentName: 'Image Selector Area',
                    componentState: { moduleId: 'imageSelectorArea' }
                } ]
            } ]
        } ]
    } ]
};

let componentsList = [ 'JSON Preview', 'Fields', 'Image Viewer', 'Preview', 'Image Selector Area' ];

let savedState = localStorage.getItem('savedState'),
    myLayout = /*savedState ? new GoldenLayout(JSON.parse(savedState)) : */new GoldenLayout(config);

myLayout.on('stateChanged', () => {
    let state = JSON.stringify(myLayout.toConfig());
    localStorage.setItem('savedState', state);
});

componentsList.forEach((component) => {
    myLayout.registerComponent(component, function (container, state) {
        container.getElement().append($('#' + state.moduleId).html());
        if (state.moduleId) {
            angular.module(state.moduleId).value('container', container).value('state', state);
            angular.bootstrap(container.getElement()[0], [ state.moduleId ]);
        }
    });
});

myLayout.init();