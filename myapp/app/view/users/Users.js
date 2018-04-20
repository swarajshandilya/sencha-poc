Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ 'name', 'email', 'phone' ]
});
var userStore = Ext.create('Ext.data.Store', {
    model: 'User',
    data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
});

Ext.define('MyApp.view.users.Users', {
    extend: 'Ext.Panel',
    xtype: 'users', 

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit',
    ],

    layout: 'fit', 
  

    items: [{
        xtype: 'grid',
        store: userStore,
        columns: [
            {
                header: 'Name',
                text: 'Name',
                width: 100,
                sortable: false,
                hideable: false,
                dataIndex: 'name'
            },
            {
                text: 'Email Address',
                width: 150,
                dataIndex: 'email',
                hidden: false
            },
            {
                text: 'Phone Number',
                flex: 1,
                dataIndex: 'phone'
            }
        ],
    }]
});