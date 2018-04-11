Ext.define('MyApp.view.notify.Notifications', {
    extend: 'Ext.Panel',
    xtype: 'notifications', 

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],

    layout: 'fit', 

    items: [{
        xtype: 'grid',

        store: {
            type: 'notifications' 
        },

        columns: [{
            text: 'First Name',
            dataIndex: 'first_name',
            flex : 1
        }, {
            text: 'Last Name',
            dataIndex: 'last_name',
            flex: 1
        }]
    }]
});