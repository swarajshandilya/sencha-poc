Ext.application({
    name: 'MyApp',
    extend: 'MyApp.Application',  

    requires: [
        'MyApp.*'   // tell Cmd to include all app classes
    ]
});