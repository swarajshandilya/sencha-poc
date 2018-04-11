var dummyresp=[];
Ext.define('MyApp.store.Notifications', {
    extend: 'Ext.data.Store',
    alias: 'store.notifications',
    data: dummyresp,
    model: 'MyApp.model.Notification',
    proxy: {
        type: 'ajax',
        url : 'https://reqres.in/api/users/2',//'https://jsonplaceholder.typicode.com/posts/1',
        reader: {
            type : 'json',
            root : 'data'
        }
    },
    autoLoad: true,
    listeners: {
        beforeload: function(store, operation) {
    		//TODO: Should I be populating store fields here? If so, how?
    	},
    	load: function(store, records, success) {
    		//TODO: Create dynamic fields based on JSON response
            console.log(success);
            console.log(store.data);
            dummyresp = store.data.items[0];
        }
    }
});