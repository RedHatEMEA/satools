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
		type: "vbox",
		align: "center"
	    },
	    items: [{
		border: 0,
		flex: 1
	    }, {
		xtype: "search",
		width: "80%"
	    }, {
		border: 0,
		flex: 1
	    }, {
		xtype: "results",
		itemId: "myresults",
		width: "80%",
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
		width: "80%",
		flex: 20
	    }, {
		border: 0,
		flex: 1
	    }]
	});
    }
});
