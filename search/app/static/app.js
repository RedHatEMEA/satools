Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.HasManyAssociation");
Ext.require("Ext.form.Label");
Ext.require("Ext.grid.column.Template");
Ext.require("Ext.toolbar.Paging");

Ext.application({
    name: "Search",
    appFolder: "static",

    controllers: [
	"Results",
	"Search",
	"Message"
    ],

    launch: function() {
	Ext.create("Ext.container.Viewport", {
	    layout: {
		type: "hbox",
		align: "stretch"
	    },
	    items: [{
		border: 0,
		flex: 1
	    }, {
		layout: {
		    type: "vbox",
		    align: "stretch"
		},
		items: [{
		    border: 0,
		    flex: 1
		}, {
		    xtype: "search"
		}, {
		    border: 0,
		    flex: 1
		}, {
		    xtype: "results",
		    itemId: "myresults",
		    flex: 12
		}, {
		    border: 0,
		    flex: 1
		}, {
		    xtype: "panel",
		    layout: "fit",
		    items: [{
			xtype: "message",
			itemId: "mypanel"
		    }],
		    flex: 20
		}, {
		    border: 0,
		    flex: 1
		}],
		border: 0,
		flex: 8
	    },{
		border: 0,
		flex: 1
	    }]
	});
    }
});
